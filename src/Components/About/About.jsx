import React, {useEffect} from 'react'
import './about.css'

// images
import img from '../../Assets/customer.png'
import img2 from '../../Assets/mountain.png'
import img3 from '../../Assets/climbing.png'

//import video
import video from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          why hikings?
        </h2>

        <div className="mainContent container grid">
        <div data-aos="fade-up"data-aos-duration="2000"className="singleItem">
          <img src={img} alt="Image Name" />

          <h3>24h customer service</h3>

          <p>
          "Enjoy peace of mind with our 24/7 customer service – we're here for you anytime, anywhere!"
          </p>
        </div>

        <div data-aos="fade-up"data-aos-duration="2000"className="singleItem">
          <img src={img2}  alt="Image Name" />

          <h3>100+ mountains </h3>

          <p>     
"Discover over 100 breathtaking mountains waiting for your next adventure!"
          </p>
        </div>
        <div data-aos="fade-up"data-aos-duration="3000"className="singleItem">
          <img src={img3}  alt="Image Name" />

          <h3>snow skating</h3>

          <p>
          "Experience the thrill of snow skating on pristine slopes – adventure awaits!"
          </p>
        </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right"data-aos-duration="2000"className="cardText">
              <h2>
                wonderful nature experience
              </h2>
              <p> "Immerse yourself in a wonderful nature experience – where every moment is a breathtaking adventure!"
              </p>
            </div>
            <div data-aos="fade-left"data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
