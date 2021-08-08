import React from 'react';
import { useState,useEffect } from 'react';
import {projectStorage,projectFirestore,timestamp} from '../Firebase/firebase'
const useStorage = (file,title,github,type) =>{
    const [percentage,setPercentage] = useState(null);
    const [error,setError] = useState('')
    const [url,setURL] = useState('');
    useEffect(()=>{
        const postImage = projectFirestore.collection('images');
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_changed',
        (snap)=>{
            const percentage = (snap.bytesTransferred /snap.totalBytes) * 100;
            setPercentage(percentage);
        },
        (err)=>(setError(err)),
        async ()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await postImage.add({url , createdAt,title,github,type});
            setURL(url);

        })
    },[file])
    console.log('useStorage',percentage,error,url)
    return{ percentage,error,url}
}
export default useStorage;