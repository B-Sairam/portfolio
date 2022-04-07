import React, { useEffect, useState } from "react";
import { ReactTypical } from '@deadcoder0904/react-typical';
import img1 from './icons/js.png';
import img2 from './icons/boostrap.png';
import img3 from './icons/logo192.png';
import img4 from './icons/node.png';
import img5 from './icons/ex.png';
import img6 from './icons/mongodb.png';
function App() {
  const [show, setShow]= useState(false);
  const [showBar,setShowBar]=useState(false);
  const controlNav=()=>{
    if(window.scrollY>100){
      setShowBar(false)
    }else{
      setShowBar(true)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',controlNav)
    return()=>{
      window.removeEventListener('scroll',controlNav)
    }
  },[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show);
  return <>
  <div className="main">
    <div className={`header ${showBar && 'nav-col'}`}>
    <div className="name">SR</div>
    <div className="nav-text">
      <ul>
      <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
      </ul>
    </div>
    <div className="side-Bar" onClick={handleShow}><i class="fa-solid fa-bars"></i></div>

    

  </div>
    
     <div className="icon">
        <ul>
          <li><a href="https://github.com/B-Sairam"><i class="fa-brands fa-github"></i></a></li>
         <li><a href="https://www.linkedin.com/in/sai-ram-65b43b203/"><i class="fa-brands fa-linkedin-in"></i></a></li> 
         <li><a href="https://github.com/B-Sairam"><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
        <div className="left-line"></div>
      </div>
      <div className="email">
      <a class="email-nk" href="mailto:bbsairam77@gmail.com" rel="noopener noreferrer" target="_blank">bbsairam77@gmail.com</a>
       
        <div className="right-line"></div>
      </div>
    <div className="content-page">
      <div className="profile-info" id="home">
       <p>Hai, my name is</p>
       <h1>SAIRAM. </h1>
       <h2>I build things for the<br></br> web</h2>
       <div className="role"> 
       <i class="fa-solid fa-chevron-left"></i> <ReactTypical
          steps={['Full-Stack Developer', 1500, 'MERN Stack Developer', 1500,'JavaScript Developer',1500]}
          loop={Infinity}
          wrapper="p"
        />/<i class="fa-solid fa-chevron-right"></i>
        </div>
       
      <div>
       <a href="https://drive.google.com/file/d/1ROBArA77kYc8ECj4td5PUdGcjhlNnbkX/view?usp=sharing" target="_blank" rel="noreferrer"> <button className="btn">Get Resume</button></a>
        <a href="#contact"><button className="btn active">Contact</button></a>
      </div>
      </div>
      <div className="about" id="about">
          <div className="title">
          <h1>About</h1>
          <div className="title-line"></div>
          </div>

          <div className="about-detail">
            <div className="text">
              Hello! My name is Sairam and I'm currently doing Engineering in
              B.Tech (Information Technology) 3<sup>rd</sup> year. My interest in web development started during in 2<sup>nd</sup> year,
              In my college when I try some basic HTML ke forms , buttons  I enjoyed that the output
              comes in web browser it's really impressed me!
              <br></br>
              <br></br>
              Then I watchs some youtube tutorial vidoes to learn HTML,CSS & JavaScript 
              and I started making some websites. After that I need to improve my skill so, I joined GUVI to learn
              Full-stack web Development (MERN) .That turns out me to become a web developer.
              <br></br> <br></br>
              Now, I started making Full-stack project ke (Real time chating App , Movie booking APP , Food Devery App).
            </div>
            <div className="pic">
              <img src="https://sessionize.com/image/6588-400o400o2-e3-5490-4b05-9eac-5f7859cbbe72.84d8fada-dbbf-4b2c-8a01-4bee779ae257.jpg" alt="profile"/>
            </div>
          </div>
    
      </div>
      <div className="skills" id="skill">
          <div className="c-title">
          <h1>Skills</h1> 
          </div>
          <div className="m-title">Here are a few technologies I’ve been working with recently:</div>
          <div className="skill-body">
            <div className="skill-item"><img src={img1} alt="js"/><h4>JavaScript (ES6+)</h4></div>
            <div className="skill-item"><img src={img2} alt="boostrap"/><h4>Boostrap</h4></div>
            <div className="skill-item"><img src={img3} alt="react js"/><h4>React js</h4></div>
            <div className="skill-item"><img src={img4} alt="node js"/><h4>Node js</h4></div>
            <div className="skill-item"><img src={img5} alt="Express js"/><h4>Express js</h4></div>
            <div className="skill-item"><img src={img6} alt="MongoDB"/><h4>MongoDB</h4></div>

          </div>
      </div>

      <div className="projects" id="project">
         <div className="title">
            <h1>Projects</h1>
            <div className="title-line"></div>
          </div>

          <div className="projects-cards">
            <div className="card">
              <h3 className="card-head">
                Chat Appcation
              </h3>
              <p className="card-body">This is Real-time chating web appcation ke what's app build with MERN Stack
                It's include feature ke one-on-one chat and Group chat.
               <span> Using Socket.io</span> for the Real Time experience</p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/tin-front-end" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/Tin-backend" target="_blank"rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://sad-wozniak-0da6ab.netfy.app/" target="_blank"rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card">
              <h3 className="card-head">
                Chat Appcation
              </h3>
              <p className="card-body">This is Real-time chating web appcation ke what's app build with MERN Stack
                It's include feature ke one-on-one chat and Group chat.
               <span> Using Socket.io</span> for the Real Time experience</p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/tin-front-end" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/Tin-backend" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://sad-wozniak-0da6ab.netfy.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card">
              <h3 className="card-head">
                Chat Appcation
              </h3>
              <p className="card-body">This is Real-time chating web appcation ke what's app build with MERN Stack
                It's include feature ke one-on-one chat and Group chat.
               <span> Using Socket.io</span> for the Real Time experience</p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/tin-front-end" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/Tin-backend" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://sad-wozniak-0da6ab.netfy.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card">
              <h3 className="card-head">
                Chat Appcation
              </h3>
              <p className="card-body">This is Real-time chating web appcation ke what's app build with MERN Stack
                It's include feature ke one-on-one chat and Group chat.
               <span> Using Socket.io</span> for the Real Time experience</p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/tin-front-end" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/Tin-backend" target="_blank"rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://sad-wozniak-0da6ab.netfy.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
          </div>

      </div>
      <div className="contact" id="contact">
      <div className="title">
          Get in Touch
          </div>
          <p>I'm currently looking for job and project,my inbox is always open. Whether you have a question or just want to say hi,
             I’ll try my best to get back to you!</p>
     <a class="email-nk" href="mailto:bbsairam77@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>

      </div>
      <div className="footer">
        <div className="footer-icon">
        <a href="https://github.com/B-Sairam"><i class="fa-brands fa-github"></i></a>
        <a href="https://github.com/B-Sairam"><i class="fa-brands fa-linkedin-in"></i></a>
         <a href="https://github.com/B-Sairam"><i class="fa-brands fa-twitter"></i></a>
        </div>
        <p>Desiged & Built by Sairam</p>
        <span>	&copy; Sairam 2022</span>
      </div>
    </div>
   
   
  </div>
  {
    show?<div className="canvas">
    <div onClick={handleClose} className="close-btn">
    <i class="fa-solid fa-xmark"></i>
    </div>
    <div className="side-bar-nav" onClick={handleClose}>
    <ul>
           <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#project">Projects</a></li>
        </ul>
    </div>


  </div> : ""
  }
  
  </>
}
export default App;
