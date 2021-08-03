import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements';
import { HeroContainer,
         HeroBg,
         VideoBg,
         HeroBtnWrapper,
         HeroContent,
         HeroP,
         HeroH1,
         ArrowFoward,
         ArrowRight,
 } from './HeroElements'
const HeroSection = () => {
const [hover,setHover]=useState(false)
const onHover=()=>{
    setHover(!hover)
}

    return (
       <HeroContainer>
          <HeroBg>
          <HeroContent>
              <HeroH1>Theatre Open for Streaming</HeroH1>
              <HeroP>
                  Sign up for new account and host your own shows
                  on our platform.
              </HeroP>
              <HeroBtnWrapper>
                  <Button to="signup" onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                  >
                      Get Started{hover?<ArrowFoward/>:<ArrowRight/>}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
       </HeroContainer>
    )
}

export default HeroSection;
