import React from 'react'
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header IsDarkmode={IsDarkmode}/>
      <About IsDarkmode={IsDarkmode} />

      <Projects IsDarkmode={IsDarkmode}/>
      <Testimonials IsDarkmode={IsDarkmode}/>
      <Contact IsDarkmode={IsDarkmode}/>
      <Footer IsDarkmode={IsDarkmode}/>

    </div>
  )
}

export default App;
