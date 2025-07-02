import React from 'react'
import AboutSection from '../components/about-page/AboutSection'
import AboutCard from '../components/about-page/Aboutcard'
import AboutVision from '../components/about-page/Aboutvision'
import WhatsappIcon from '../components/common/Whatsappicon'

const About = () => {
  return (
    <div>
      <AboutSection />
      <AboutCard />
      <AboutVision />
      <WhatsappIcon />
    </div>
  )
}

export default About
