import React from 'react';
import './project.css';
import tetris from '../../assets/mxw5dpgr.png';
import chatapp from '../../assets/gzp7o186.png';
import shoppingweb from '../../assets/2474678.jpg';
const Project = () => {
  return (
    <section id='portfolio'>
      <div className="container">
        <h1 className='subtittle'>Projects</h1>
        <div className="worklist">
          <div className="work">
            <img src={tetris} alt="tetris" className='tetris' />
            <div className='layer'>
              <span className='project'>Teris game</span>
              <p className='effect'>Tetris is a classic and iconic puzzle video game that has become a cultural phenomenon since its creation in the 1980s</p>
              <div className='link1'><a href="https://github.com/abhikali-cmd" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
            </div>
          </div>
          <div className="work">
            <img src={chatapp} alt="chatapp" className='chatapp'/>
            <div className='layer'>
              <span className='project'>Chating Website</span>
              <p className='effect'>Crafted a dynamic chatting website, fostering seamless communication with an engaging user interface and real-time interactions.</p>
              <div className='link1'><a href="https://github.com/abhikali-cmd" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
            </div>
          </div>
          <div className="work">
            <img src={shoppingweb} alt="shoping" className='shoppingapp' />
            <div className='layer'>
              <span className='project'>Shopping</span>
              <p className='effect'>Designed an engaging shopping website for seamless online retail experiences.</p>
              <div className='link1'><a href="https://github.com/abhikali-cmd" target="_blank" rel="noopener noreferrer" className='abhi'><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;