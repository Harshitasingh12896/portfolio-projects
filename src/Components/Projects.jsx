import React,{useEffect, useState} from 'react'
import left_arrow from '../assets/left_arrow.svg';
import right_arrow from '../assets/right_arrow.svg';
import { projectsData} from '../assets/assets';
import { motion } from "framer-motion"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
  const [cardsToShow, setCardsToShow] = useState(1); // Track how many cards to show
    
  useEffect(()=>{
    const updateCardsTOShow=()=>{
      if(window.innerWidth<=1024){
        setCardsToShow(projectsData.length);
      }else{
        setCardsToShow(1)
      }
    };
      updateCardsTOShow();
      window.addEventListener('resize',updateCardsTOShow);
      return()=>window.removeEventListener('resize',updateCardsTOShow);
    

  },[])
  // Function to go to the next project
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length); // Loop to the start
  };

  // Function to go to the previous project
  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length // Loop to the end
    );
  };
      





  return (
    <motion.div
    initial={{opacity:0, x:-200}}
      transition={{duration:1.0}}
      whileInView={{opacity:1,x:-0}}
      viewport={{once:true}}
     className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Projects<span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className= 'text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces,Buliding Legacies-Explore Our Portfolio</p>
        {/* slider buttons */}
       <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={left_arrow} alt="Previous"/>
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' arial-label='Next Project'>
            <img src={right_arrow} alt="Next"/>
        </button>
       </div>

       {/* project slider container */}
       <div className='overflow-hidden'>
  <div className='flex gap-8 transition-transform duration-500 ease-in-out'
    style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
    {projectsData.map((project, index) => (
      <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
          <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg'>
            <h2 className='text-xl font-semibold text-gray-800'>
              {project.title}
            </h2>
            <p className='text-gray-500 text-sm'>
              {project.price} <span>|</span> {project.location}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

       


    </motion.div>
  )
}



export default Projects;
