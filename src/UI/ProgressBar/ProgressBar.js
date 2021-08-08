import React,{useEffect} from 'react';
import useStorage from '../../Hooks/useStorage';
import { motion } from 'framer-motion';
import '../ProgressBar/ProgressBar.css'
const ProgressBar = ({file,setFile,title,github,setType,type,setGithub,setTitle})=>{
 const {percentage,url} = useStorage(file,title,github,type);
 useEffect(()=>{
     if(url){
        setFile(null);
        setGithub('');
        setType('');
        setTitle('');
     }
 },[url]);
 return (
     (file && <motion.div className="progress-bars"
        initial={{width:0}}
        animate={{width:percentage + '%'}}>
     </motion.div>)
 )
}
export default ProgressBar;