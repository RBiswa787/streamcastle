import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook  } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer,
         FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
     FooterLinkItems,
    FooterLinkTitle,
FooterLink,
SocialIconLink,
SocialIcons,
SocialLogo,
SocialMedia,
SocialMediaWrap,
WebsiteRights } from './FooterElements'
const Footer = () => {
    
    const toggleHome=()=>{
        scroll.scrollToTop();
    };

    return (
        
<FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                     
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                   
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                     
                        <FooterLink to="/">Submit Videos</FooterLink>
                        <FooterLink to="/">Ambassador</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencers</FooterLink>
                        
                   
                </FooterLinkItems>

                
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                     
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponsors</FooterLink>
                        
                   
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                     
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                        <FooterLink to="/">LinkedIn</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                       
                   
                </FooterLinkItems>

                
            </FooterLinksWrapper>

        </FooterLinksContainer>

    <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
                StreamCastle
            </SocialLogo>
            <WebsiteRights>StreamCastle © {new Date().getFullYear()}
            All rights Reserved.</WebsiteRights>
        <SocialIcons>
            <SocialIconLink href="/" target="_blank"
            aria-label="Facebook">
                <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank"
            aria-label="Twitter">
                <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank"
            aria-label="Linkedin">
                <FaLinkedin/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank"
            aria-label="Instagram">
                <FaInstagram/>
            </SocialIconLink>
        </SocialIcons>
        </SocialMediaWrap>
    </SocialMedia>
    </FooterWrap>
</FooterContainer>
            
        
    )
}

export default Footer
