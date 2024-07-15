import React, {useEffect} from 'react'
import './blog.css';
// read me arrow icon
import { BsArrowRightShort } from "react-icons/bs";

// import images to use
import img from '../../Assets/image20.jpg';
import img2 from '../../Assets/image21.jpg';
import img3 from '../../Assets/image22.jpg';
import img4 from '../../Assets/image23.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

// map method to display post
const Posts = [
  {
    id: 1,
    postImage: img,
    title: 'Beautiful Vietnam, let us travel!',
    desc: 'Vietnam, a country rich in natural beauty, offers an entirely different world beneath the surface: an underground realm of massive caverns, intricate cave systems, and fascinating geological features.'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Tranquil Retreats in Switzerland Green Mountain Ranges',
    desc: 'Explore Switzerland lush green mountain ranges, perfect for eco-conscious travelers seeking serene and sustainable escapes.'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Adventures in the Amazon Rainforest',
    desc: 'The Amazon Rainforest, also known as Amazonia, is the largest tropical rainforest in the world, famed for its biodiversity and indigenous cultures.'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Exploring the Great Wall of China',
    desc: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, built across the northern borders of China.'
  }
];

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='blog container section'>
      <div className="secContainer">
        
        <div className="secIntro">
          <h2 data-aos="fade-up"data-aos-duration="2000" className='secTitle'>
            Our Blog
          </h2>
          <p data-aos="fade-up"data-aos-duration="2500">
          "Stay inspired with our blog – your go-to source for travel tips, destination guides, and eco-friendly adventure ideas!"
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({ id, postImage, title, desc }) => {
              return (
                <div data-aos="fade-up"data-aos-duration="2000"  className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up"data-aos-duration="3000">{title}</h3>
                    <p data-aos="fade-up"data-aos-duration="4000">{desc}</p>
                  </div>

                  <a href="#" className='flex' data-aos="fade-up"data-aos-duration="4500">
                      Read more
                    <BsArrowRightShort className="icon" />
                   
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Blog;
