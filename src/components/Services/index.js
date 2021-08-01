import React from 'react'
import Icon1 from '../../images/Servicessvg-1.svg'
import Icon2 from '../../images/Servicessvg-2.svg'
import Icon3 from '../../images/Servicessvg-3.svg'
import { ServicesContainer,
         ServicesH1,
         ServicesH2,
         ServicesCard,
         ServicesIcon,
         ServicesP,
         ServicesWrapper,
         

        
} from './ServicesElements'
const index = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Endless Streaming</ServicesH2>
                <ServicesP>We provide a platform for your shows with 
                so that you can grow as a creator with larger audience</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Exclusive Platforn</ServicesH2>
                <ServicesP>We provide a platform for your shows with 
                so that you can grow as a creator with larger audience</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Earn as you Grow!</ServicesH2>
                <ServicesP>We provide a platform for your shows with 
                so that you can grow as a creator with larger audience</ServicesP>
            </ServicesCard>

        </ServicesWrapper>

        </ServicesContainer>
    )
}

export default index
