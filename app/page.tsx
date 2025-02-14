 'use client';
import { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function Home() {

  const[IsDarkmode,setIsDarkMode]=useState(false);
  useEffect(()=>{
    if(localStorage.theme==='dark'||(!('theme' in localStorage) && window.
  matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)

    }
  },[])

  useEffect(()=>{
    if(IsDarkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }
     else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
     }

  },[IsDarkmode])

  return (
    <div> 
    <Navbar IsDarkmode={IsDarkmode} setIsDarkMode={setIsDarkMode}/>
    <Header IsDarkmode={IsDarkmode}/>
    <About IsDarkmode={IsDarkmode} />
    <Services IsDarkmode={IsDarkmode}/>
    <Work IsDarkmode={IsDarkmode} />
    <Contact IsDarkmode={IsDarkmode}/>
    <Footer IsDarkmode={IsDarkmode}/>
    </div>
  );
}
