import React from 'react';
import'./about.css';
import contentImg from '../../image/safreenaimage.jpg';

const About=() =>{
  return (

    <section className='about'>
        <div className='about-img'>
        <img src={contentImg} alt="" ></img>
        </div>
        <div className='about-content'>

        <h2 className='heading'>About <span>Me</span></h2>
    
        <h3> Front-end<span> Developer</span></h3>
       <p className='contentDesc'>I am a skilled and passionate front-end developer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient HTML,CSS,and Javascript, as well as design software  such as Adope photoshop and Illustrator.</p>
   </div>

</section>
  )}
  export default About;