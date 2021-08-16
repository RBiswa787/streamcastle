import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import '../HeroSection/index.js';
import SignUp from '../SignUp.js';
import toggle from '../toggle.js';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav]=useState(false)
    const [buttonSignup, setbuttonSignup] = useState(false);
    const changeNav=()=>{
        if(window.scrollY >=80 ){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
             <NavLogo to="/" onClick={toggleHome}>
         
              StreamCastle    
             </NavLogo>
             <MobileIcon onClick={toggle}>
                 <FaBars/>
             </MobileIcon>
             <NavMenu>
                 <NavItems>
                     <NavLinks to="about"
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                               
                               >About</NavLinks>
                 </NavItems>
                 <NavItems>
                     <NavLinks to="discover"
                                  smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}>Discover</NavLinks>
                 </NavItems>
                 <NavItems>
                     <NavLinks to="services"
                                   smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}>Services</NavLinks>
                 </NavItems>
                 <NavItems>
                     <NavLinks to="signup"
                                 smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}>Sign up</NavLinks>
                 </NavItems>
             </NavMenu>
             <NavBtn>
                 <NavBtnLink onClick = {() => setbuttonSignup(!buttonSignup)} >Sign In</NavBtnLink>
             </NavBtn>
            </NavbarContainer>
        </Nav> 
        <SignUp trigger = {buttonSignup}></SignUp>
        <div style = {{
            position: "absolute",
            backgroundColor: "black",
            width: "100%",
            height: "100vh",
            top: "9%",
            opacity: "0",
            zIndex: "2",
        }} onClick = {() => setbuttonSignup(!buttonSignup)}></div>
</IconContext.Provider>

        </>
    );
};

export default Navbar;
