import React from 'react';
import './technicalskill.css';
import meter1 from '../../assets/1.png';
import meter2 from '../../assets/1.png';
import meter3 from '../../assets/1.png';
import colorSharp  from '../../assets/color-sharp.png';
import {Container,Row ,Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Technicalskill = () => {
  const responsive = {
	  superLargeDesktop: {
	    // the naming can be any, depends on you.
	    breakpoint: { max: 4000, min: 3000 },
	    items: 5
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1024 },
	    items: 3
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 2
	  },
  
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 1
	  }
  };
  return (
	<section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx wow zoomIn">
                        
                        <p>I believe in the power of continuous learning and innovation, and I am eager to contribute my skills and knowledge to the ever-growing digital landscape. Let's connect and embark on exciting journeys in the world of technology together!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image5" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image5" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image5" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image5" />
                                <h5>My sql</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image5" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image5" />
                                <h5>Python</h5>
                            </div>

                        </Carousel>
                    </div>
				</Col>
			</Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>

  )
}
export default Technicalskill;

