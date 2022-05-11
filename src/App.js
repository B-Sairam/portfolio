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
  const [showMessage,setshowMessage]=useState(false);
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
       <h2>I build things for the web</h2>
       <div className="role"> 
       <i class="fa-solid fa-chevron-left"></i> <ReactTypical
          steps={['Full-Stack Developer', 2000, 'MERN Stack Developer', 2000,'JavaScript Developer',2000]}
          loop={Infinity}
          wrapper="p"
        />/<i class="fa-solid fa-chevron-right"></i>
        </div>
       
      <div>
       <a href="https://drive.google.com/file/d/1L47PRLKvCs1mopHrG_wR_O0RDs_dqC07/view?usp=sharing" target="_blank" rel="noreferrer"> <button className="btn">Get Resume</button></a>
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
              B.Tech (Information Technology) 3<sup>rd</sup> year. My interest in web development was started during in 2<sup>nd</sup> year,
              In my college when I try some basic HTML like forms , buttons  I enjoyed that the output
              comes in web browser it's really impressed me!
              <br></br>
              <br></br>
              Then I watchs some youtube tutorial vidoes to learn HTML,CSS & JavaScript 
              and I started making some websites. After that I need to improve my skill so, I joined GUVI to learn
              Full-stack web Development (MERN) .That turns out me to become a <span>Full-Stack Web Developer</span>.
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
                Chat Application
              </h3>
              <p className="card-body">This is Real-time chating web appcation like what's app build with MERN Stack
                It's include feature ke one-on-one chat and Group chat.
               <span> Using Socket.io</span> for the Real Time experience</p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/tin-front-end" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/Tin-backend" target="_blank"rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://sad-wozniak-0da6ab.netlify.app/" target="_blank"rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card">
              <h3 className="card-head">
                Web Scraping App
              </h3>
              <p className="card-body">This Project is a Web Scraping web appcation Like cashKaro,etc. Build with MERN Stack,
               Datas are Scraping from other website like <span>Amazon </span> showing there Products in the website.
               </p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/webScrapping-Ecommerce-frontEnd" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/webScrapping-Ecommerce-backend" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://practical-almeida-ce1025.netlify.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card">
              <h3 className="card-head">
                Movie Booking Application
              </h3>
              <p className="card-body">This is Movie tickets booking web application like Bookmyshow
              ,Built with MERN Stack.Fetching the data from MongoDB and some features like<span> booking
              functionality </span>are added in this App.
              </p>
                <span className="tech">React js Node js Express js MongoDB </span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/Movie-Booking-front-end" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/MovieBooking-Backend " target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://6257f35e03c19600081b14ae--sweet-moxie-142b72.netlify.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="card">
              <h3 className="card-head">
                Item catalog
              </h3>
              <p className="card-body">This is e-commerse website developed with ReactJs,
                  MongoDB NodeJs, Express Js and Frameworks like
                  Boostrap Js. This website have two users admin/customers
                  and JWT Integretion.
               </p>
                <span className="tech">React js Node js Express js MongoDB </span>
                <div className="card-footer">
               
                  <a href="https://github.com/B-Sairam/item-catalog-frontend1" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="https://github.com/B-Sairam/item-catalog-backend" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="https://627a4dbfb5a19c01c9b4aeca--euphonious-capybara-839acc.netlify.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
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
             <div class="row">  
                <div class="contact-col">
                   <div>
                       <i class="fa fa-home"></i>
                       <span>
                           <h5>5/23 dr.ambedkar street</h5>
                           <p>Perumbakkam, Chennai, IN</p>
                     </span>
                   </div>
                   <div>
                    <i class="fa fa-phone"></i>
                    <span>
                        <h5>+91 8248947450</h5>
                        <p>Weekdays,10AM to 8PM</p>
                  </span>
                </div>
                <div>
                <i class="fa-solid fa-envelope"></i>
                    <span>
                        <h5>bbsairam77@gmail.com</h5>
                        <p>Mail me to get in touch</p>
                  </span>
                </div>
                   
                </div>
                <div class="contact-col2">
                    <form action="/">
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                        <input type="text" name="email" placeholder="Enter your Email Adderss" required />
                        <textarea rows="5" name="message" placeholder="Message"></textarea>
                        {
                          showMessage?<p style={{paddingLeft:"20px",color:"whitesmoke"}}>Message sent</p>:""
                        }
                        <button class="contact-btn" onClick={()=>{
                          setshowMessage(true);
                          setTimeout(() => {
                            setshowMessage(false);
                          }, 3000);
                        }}>Send Message</button>
                    </form>
        
                </div>
              
            </div>

      </div>
      <div className="footer">
        <div className="footer-icon">
        <a href="https://github.com/B-Sairam"><i class="fa-brands fa-github"></i></a>
        <a href="https://github.com/B-Sairam"><i class="fa-brands fa-linkedin-in"></i></a>
         <a href="https://github.com/B-Sairam"><i class="fa-brands fa-twitter"></i></a>
        </div>
        <p>Design & Built by Sairam</p>
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
