import React,{useState} from 'react'
import './navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // to toggle,show navbar
  const [active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // code to remove navbar when clicking close button
  const removeNav =()=>{
    setActive('navBar')
  }


  // adding background color to header 
  const [transparent, setTransparent] = useState('header')
  const addBg =()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll',addBg)



  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            {/*  from react icons https://react-icons.github.io/react-icons/search/#q=travel   should import that in the begining*/}
            <h1 className='flex'><SiYourtraveldottv className="icon" />
            Dot
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Product</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contacts</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
              {/* login button */}
            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              {/* sign up button */}
              <button className='btn'>
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>
          {/* onclick remove navbar */}
          <div onClick={removeNav} className="closeNavbar">
            {/* react icons https://react-icons.github.io/react-icons/search/#q=ai%20fillclose   after that should import that in the begining of the code as import { AiFillCloseCircle } from "react-icons/ai";*/}
          <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        {/* react icons https://react-icons.github.io/react-icons/search/#q=tbgrid  after that should import that in the begining of the code as import { TbGridDots } from "react-icons/tb"; */}
        {/* when clicking it show the navbar */}
        <div onClick={showNav}>
  <TbGridDots className="icon" />
</div>

      </div>
    </section>
  )
}

export default Navbar
