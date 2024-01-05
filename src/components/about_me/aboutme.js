import React from 'react';
import './skill.css';
import uidesign from '../../assets/ui-design.png';
import Webdesin from '../../assets/website-design.png';
import appdesign from '../../assets/app-design.png';
import Image from '../../assets/new7.png';
const Skill = () => {
  return (
    <section id='skills'>
        <span className='skilltittle'>About me</span>
        <span className='toblur'>
            <div className='forrightimage'>
                <img src={Image} alt="" className='myimage'/>
            </div>
            <div className='aboutme'>
                <span className='skillDest'>
I'm a passionate 3rd-year B.Tech student with a strong coding and web development focus. I love tackling complex challenges, creating practical solutions, and believe in continuous learning. Excited to contribute to technology's dynamic landscape. Let's connect and innovate together!.</span>
                <div className='myskills'>
                    <div className="skillbar">
                        <img src={uidesign} alt="uidesign" className="skillbarimg" />
                        <div className="skillbarText">
                            <h2>UI/UX design</h2>
                            <p>
Passionate UI/UX designer with expertise in user-centric solutions, wireframing, prototyping, and responsive design.</p>
                        </div>
                    </div>
                </div>
                <div className='myskills'>
                    <div className="skillbar">
                        <img src={Webdesin} alt="Webdesign" className="skillbarimg" />
                        <div className="skillbarText">
                            <h2>Website design</h2>
                            <p>Passionate website designer creating visually appealing, user-friendly sites with a focus on delightful user experiences.</p>
                        </div>
                    </div>
                </div>            
                <div className='myskills'>
                    <div className="skillbar">
                        <img src={appdesign} alt="appdesign" className="skillbarimg" />
                        <div className="skillbarText">
                            <h2>Programmer</h2>
                            <p>Dedicated programmer skilled in crafting efficient code, solving complex problems, and embracing continuous learning for innovation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </section>
  )
}

export default Skill;