import React,{useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {homeObjOne,
        homeObjTwo,
        homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';

        const Home = () => {
  const[isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
      setIsOpen(!isOpen)
  }


    return (
       <>
       <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar/>
       <HeroSection/>
       <InfoSection {...homeObjOne}/>
       <InfoSection {...homeObjTwo}/>
       <Services/>
       <InfoSection {...homeObjThree}/>
       
       </>
    )
}

export default Home;
