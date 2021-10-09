import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import '../index.css'
import { AppProvider } from '../context'
import { Submenu } from '../Navbar/Submenu'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import More from '../More/More'
import { Sidebar } from '../Navbar/Sidebar'
import { Navbar } from '../Navbar/Navbar'
import Index from '../Jumbotoron'
import Services from '../services/Services'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
const Home = () => {
  return (
  <>

      {/* <Header /> */}
      <Hero />
      <Navbar />
      <Submenu />
      <Sidebar />

      <Banner />
      <FeaturedProducts />
      <Index />
      <Services />
      <More />
      <Footer />
  </>
   
  )
}

export default Home
