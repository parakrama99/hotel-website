import React, {useEffect} from 'react'
import './popular.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// import images
import img2 from '../../Assets/image2.jpg';
import img5 from '../../Assets/image5.jpg';
import img7 from '../../Assets/image7.jpg';
import img9 from '../../Assets/image9.webp';

import Aos from 'aos'
import 'aos/dist/aos.css'

// using high order array method to display all destinations using map.so have to list all destination in one array "data" & later call each destinations by index id

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Kandy',
    location: 'Sri Lanka',
    grade: 'culture relax',
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: 'Taj Mahal ',
    location: 'India',
    grade: 'culture relax',
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Shaolin Temple',
    location: 'China',
    grade: 'culture relax',
  },
  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Eiffel Tower',
    location: 'Paris',
    grade: 'culture relax',
  },
];
const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
   <section className='popular section container'>
    <div className="secContainer">

      <div className="secHeader flex">
        <div  data-aos="fade-right" data-aos-duration="2500" className="textDiv">
          <h2 className="secTitle">
            Popular Destinations
          </h2>
          <p>
            From historical cities to natural specticulars,come see the best of the world!
          </p>
        </div>
          {/* https://react-icons.github.io/react-icons/search/#q=bsarrowleftshort and should import from above */}
        <div  data-aos="fade-left" data-aos-duration="2500" className="iconDiv flex">
        <BsArrowLeftShort className="icon leftIcon" />
        <BsArrowRightShort className="icon" />
        </div>
      </div>

      <div className="mainContent grid">
       {
       Data.map(({ id, imgSrc, destTitle, location, grade }) => {
        return(
          <div  data-aos="fade-up" className="singleDestination">
          <div className="destImage">
            <img src={imgSrc} alt="Image title"/>


            <div className="overlayInfo">
              <h3>{destTitle}</h3>
              <p>
                {location}
              </p>

              <BsArrowRightShort className='icon' />
            </div>

          </div>


          <div className="destFooter">
            <div className="number">
              0{id}
            </div>

            <div className="destText flex">
                <h6>
                {location}
                </h6>
                <span className='flex'>
                  <span className="dot">
                  <BsDot className="icon" />
                  </span>
                  Dot
                </span>
            </div>
          </div>
        </div>
        )

      })
      
       }
      </div>
    </div>
   </section>
  )
}

export default Popular


