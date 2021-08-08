import React from 'react'
import Typical from 'react-typical'
import Card from '../../UI/Card/Card'
import EduCert from '../EduCert/EduCert';
import Portfolio from '../Portfolio/Portfolio';
import Forms from '../Form/Form';
import { color } from '../../UI/color';
import bg from '../../assets/bg.jpg'
import './RightContainer.css'
function RightContainer() {
    return (
        <div className="right-container">
        <img src={bg} width="100%" height="85%" style={{opacity:0.05,position:'fixed'}}/>
        <div className="inner-right-container"> 
          <div className="content">
            <div className="showcase">
              <div>
                <h1>Discover my Amazing
Art Space!</h1>
                <p>
                <span>&lt;span&gt;</span> I am <Typical
                      steps={['Freelancer.', 2000, 'Web Developer.', 2000 , 'Mobile App Developer.',2000]}
                      loop={Infinity}
                      wrapper="b"
                    /><span>&lt;/span&gt;</span> 
                </p>
                <a target="_blank" href="https://drive.google.com/file/d/1Rx0gLh_Ts92M4Ai4WVUHib-VhvjIakfX/view?usp=sharing" download className="explore">DOWNLOAD CV</a>
                <a target="_blank" href="https://www.fiverr.com/kashir_dev/do-modern-frontend-web-development-in-react-js-javascript" className="hire">HIRE ME <i class="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
              
            </div>
            <section className="section1">
              <div>
               
                <p> <span style={{color:color.bgWarning}}>1+ </span>Years Experience</p>
              </div>
              <div>
                
                <p><span style={{color:color.bgWarning}}>15+ </span>Completed Projects</p>
              </div>
              <div>
               
                <p> <span style={{color:color.bgWarning}}>10+ </span>Happy Customers</p>
              </div>
              <div>
                
                <p><span style={{color:color.bgWarning}}>100+ </span>Buy me a Coffee</p>
              </div>
            </section>
            <section className="myservice">
              <h2>My Services</h2>
              <div className="myservice_grid">
                  <Card link="https://www.fiverr.com/kashir_dev/do-modern-frontend-web-development-in-react-js-javascript"serv_presence="true" serv_head="Web App development" serv_para="I will develop remarkable responsive web development in react js, redux. "/>
                  <Card link="https://www.fiverr.com/kashir_dev/do-modern-frontend-web-development-in-react-js-javascript"serv_presence="true" serv_head="PSD to React App" serv_para="I am capable of delivering quick migration of PSD to React app."/>
                  <Card link="https://www.fiverr.com/kashir_dev/do-modern-frontend-web-development-in-react-js-javascript"serv_presence="true" serv_head="Bug Fix" serv_para="I will fix react js bug, any maintenance issues and errors"/>
            
              </div>
            </section>
            {/* education */}
           <section className="myservice">
             <EduCert/>
           </section>
            {/* portfolio */}
            <section className="myservice">
               <Portfolio/>
            </section>
            <section className="myservice">
              <h2>Contact Information</h2>
              <div className="contact_grid">
                <div>
                <Card cont_presence="true" cont_head1="Country" cont_ans1="Pakistan" cont_head2="City" cont_ans2="Lahore" cont_head3="State" cont_ans3="Punjab"/>                      </div>
                <div>
                <Card cont_presence="true" cont_head1="Email" cont_ans1="sheikh.kashir.sk@gmail.com" cont_head2="Office Number" cont_ans2="+92 323 4492000" cont_head3="Skype" cont_ans3="kashir ali"/>
                 </div>
                 <div>
                <Card cont_presence="true" cont_head1="Personal No." cont_ans1="+92 314 4361690" cont_head2="Zip Code" cont_ans2="54700" cont_head3="Whatsapp" cont_ans3="+92 323 4492000"/>
                 </div>
               
              </div>
            </section>
            <section className="myservice ">
            <h2>Get in touch</h2>
                <Forms/>
            </section>
          </div>
        </div>
  </div>
    )
}

export default RightContainer
