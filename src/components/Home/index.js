import React from 'react';
import Hero from "./Hero"
import LatestPets from "../../containers/LatestPets"
import Footer from "./Footer"

const Home = props => (
  <div>
    <Hero />
    <LatestPets />
    <Footer />
  </div>
)

export default Home
