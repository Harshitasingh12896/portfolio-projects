import React, { useEffect, useState } from 'react'
import logo_dark from '../assets/logo_dark.svg';
import icons8menu from '../assets/icons8menu.svg';
import cross_icon from '../assets/cross_icon.svg';

function Navbar() {
  const [showMobileMenu,setshowMobileMenu] = useState(false)
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    };
  },[showMobileMenu])





  return (
    <div className="absolute top=0 left=0 w-full z-10">
         <div className="container mx-auto flex justify-between items-center
         px-10 py-10 md:px-20 lg:px-32 bg-transparent ">
          <img src={logo_dark} alt="logo icon"/>

            <ul className="hidden md:flex gap-7 text-white">
                <a href="#Header" className='cursor-pointer hover:text-gray-400 font text-2xl'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400 text-2xl'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400 text-2xl'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400 text-2xl'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2  rounded-full'>Sign Up</button>
              <img onClick={()=>setshowMobileMenu(true)} src={icons8menu} className="md:hidden w-7 bg-white cursor-pointer" alt="icon"/>
        </div>
      {/* ------mobile-icon----- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer" >
          <img onClick={()=>setshowMobileMenu(false)}src={cross_icon} className="w-6" alt="icon"/>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={()=>setshowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setshowMobileMenu(false)}href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setshowMobileMenu(false)}href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>setshowMobileMenu(false)}href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
    


        </ul>
      </div>

    </div>
  )
}

export default Navbar;
