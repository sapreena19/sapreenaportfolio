import React from 'react';
import'./intro.css';
import bg from '../../image/safreenaimage.jpg';
import btnImg from'../../image/hire me.png';
import {Link} from 'react-scroll';

 const Intro =()=> {
  return (
    <section id="intro">
       <div className="introContent">
        <span className='hello'> Hello,</span>
        <span className='introText'>I'm <span className='introName'>Sapreena</span>
        <span className='text'></span></span>
        <p className='introPara'> I am a skilled Front- end developer with experience  <br/> visually appealing and user friendly websites</p>
       <Link><button className='btn'><img src={btnImg}alt="" className='btnImg'/>Hire me</button></Link>
       </div>
  <img src={bg} alt="Profile" className="bg"/>
  
<script src="main.js"></script>
  </section>
)
}

export default Intro;