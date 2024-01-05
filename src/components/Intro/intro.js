import React from 'react';
import './intro.css';
import btnimg from '../../assets/hireme.png';
import bg from '../../assets/new4.png';
import {Link} from 'react-scroll';
// import backGround from '../../assets/new4.jpg'
const Intro = () => {
  return (
    <section id='intro'>
      {/* <img src={backGround} alt="background" className='background'/> */}
      <div className="introcontent">
        <span className='hello'>
          Hello,
        </span>
        <span className="introtext"> I'm <span className='introname'>Abhishek </span><br />Web developer</span>
        <p className='para'>I am a skilled and passionate web developer with experience in design <br />visually appealing and user friendly websites.</p>
        <Link><button className='btn'><img src={btnimg} alt="hire me" className='btnimg' />Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
      
    </section>
  )
}

export default Intro;