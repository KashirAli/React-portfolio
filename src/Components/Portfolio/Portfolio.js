import React,{useState,useEffect} from 'react'
import './Portfolio.css'
import bgimg from '../../assets/bg.jpg'
import InputFile from  '../../UI/InputFile/InputFile'
import ProgressBar from '../../UI/ProgressBar/ProgressBar'
import SpringModal from '../../UI/Modal/Modal'
import useFireStore from '../../Hooks/useFireStore'
function Portfolio() {
        const [file,setFile] = useState(null);
        const [title,setTitle] = useState('');
        const [github,setGithub] = useState('');
        const [type,setType] = useState('');
        const {doc} = useFireStore('images');
    let portfolioData = {
        id:'',
        type:'',
        title:'',
        github:'',
        imgUrl:'',
    }
   console.log(doc,'doc')
    const getCategory = (type)=>{}
    console.log(file,title,github)
    return (
        <div className="main_container">
            <div className="work_container" >
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',}}><h2>Work</h2>
            <SpringModal setType={setType} setTitle={setTitle} setGithub={setGithub} file={file} setFile={setFile}/>
            </div>
            <div className="category_container">
                {/* <a onClick={()=>{getCategory('all')}}>ALL</a>
                <a onClick={()=>{getCategory('html&css')}}>HTML&CSS</a>
                <a onClick={()=>{getCategory('javascript')}}>JAVASCRIPT</a>
                <a onClick={()=>{getCategory('react')}}>REACT</a> */}
            </div>
            </div>
            {file && github && <ProgressBar setTitle={setTitle} setGithub={setGithub} setType={setType} type={type} title={title} github={github} file={file} setFile={setFile}/>}
            <div className="portfolio_container">
                {doc.map((doc)=>(
                     <div key={doc.id} className="portfolio_card" style={{background:'darkgrey',height:'280px',width:'100%' , overflow:'hidden' }}>
                     <img src={doc.url} width="100%" height="100%" />
                     <div>
                         <h3>{doc.title}</h3>
                         <a href={doc.github} style={{background:'yellow'}} className="portfolio_link" >Github Link</a>
                     </div>
                 </div>
                ))}
               
            </div>
        </div>
        
    )
}

export default Portfolio ;
