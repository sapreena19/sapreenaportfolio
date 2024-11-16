import React from 'react';
import'./service.css';

const Service=() =>{
  return (

    <section id='service'>
    <div className='serviceBars'>
        <h2 className='serviceTitle'>My <span>Service</span></h2>
        <div className='serviceBar'>
            <div>
            
            <i class='bx bx-code'></i>
                <h2>UI/UX Design</h2>
           
                <p>UI design is the process of designing <br/>the visual and interactive elements<br/> of a digital product's interface.</p>
          
          <br/>
           <a href="#"className='read'>Learn more</a>
            </div>
        
            <div >
            <i class='bx bx-crop'></i>
            
                <h2>Website Design</h2>
                <p>Web design is a process of planing,<br/>conceptualizing,and creating the<br/> visual and functional aspects
                <br/> of a website</p>
              <br/> <a href="#"className='read'>Learn more</a>
            </div>

            <div>
            <i class='bx bxl-apple'></i>
    
                <h2>App Design</h2>
                <p>App design is the process of creating the<br/> visual and interactive aspects of a<br/> mobile or web application.</p>
            <br/>   <a href="#" className='read'>Learn more</a>
            </div>
        </div>
        </div>
    
    </section>
  )
}

export default Service;