import React, {useEffect} from 'react'
import './offers.css'
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

// importing images
import img6 from '../../Assets/image6.jpg'
import img7 from '../../Assets/image10.jpg'
import img8 from '../../Assets/image8.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Offers = [

  {
    id: 1,
    imgSrc: img8,
    destTitle: 'Machu Pichu',
    location: 'peru',
    price: '$100',
  },
  {
    id: 1,
    imgSrc: img6,
    destTitle: 'Machu Pichu',
    location: 'colombia',
    price: '$130',
  },
  {
    id: 1,
    imgSrc: img7,
    destTitle: 'Machu Pichu',
    location: 'thaiwan',
    price: '$1040',
  },
]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div data-aos="fade-up"data-aos-duration="2000"className="secIntro">
          <h2 className="secTitle">
            special offers
          </h2>
          <p>
          Explore top destinations with our eco-friendly travel deals  
          </p>
        </div>

      <div className="mainContent grid">

      {
  Offers.map((offer) => {
    const { id, imgSrc, destTitle, location, price } = offer; // Destructure properties here
    return (
      <div data-aos="fade-up" data-aos-duration="3000"className="singleOffer" key={id}>
        <div className="destImage">
          <img src={imgSrc} alt={destTitle} />

          <span className="discount">
            30% off
          </span>
        </div>

        <div className="offerBody">
          <div className="price flex">
            <h4>
            {price}
            </h4>
            <span className="status">
              for rent
            </span>
          </div>

          <div className="amenities flex">
            <div className="singleAmenity flex">
              <MdKingBed className="icon" />
              <small>2 beds</small>
            </div>
            <div className="singleAmenity flex">
              <MdBathtub className="icon" />
              <small>1 bath</small>
            </div>
            <div className="singleAmenity flex">
              <FaWifi className="icon" />
              <small>wifi</small>
            </div>
            <div className="singleAmenity flex">
              <MdAirportShuttle className="icon" />
              <small>shuttle</small>
            </div>
          </div>

          <div className="location flex">
            <MdLocationOn className="icon" />
            <small>450 vine #310 , {location}</small>
          </div>
          <button className='btn flex'>
            view details
            <BsArrowRightShort className="icon" />
          </button>
        </div>
      </div>
    );
  })
}


      </div>
      </div>
    </section>
  )
}

export default Offer
