import React,{useState,useEffect} from 'react';
import { projectFirestore } from '../Firebase/firebase';
const useFireStore = (collection)=>{
    const [doc,setDoc] = useState([]);
    
    useEffect(() => {
        const document = [];
       const unsub =  projectFirestore.collection(collection).
       orderBy('createdAt','desc').
       onSnapshot((snap)=>{
            snap.forEach((doc)=>
                document.push({...doc.data(),id:doc.id})
            )
            setDoc(document);
        })
        console.log('useEffect called','useFireStore')
         return () => unsub();
    },[collection])
    console.log('document :' ,doc);
    return {doc};
}
export default useFireStore;