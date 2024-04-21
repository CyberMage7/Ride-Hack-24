import React from 'react'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import Timeline from './Timeline/Timeline'
import Footer from "../footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Body />
      <Timeline />
      <Footer />
    </div>
  )
}

export default Homepage
