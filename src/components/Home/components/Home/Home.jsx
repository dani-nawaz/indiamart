import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import '../index.css'
import { AppProvider } from '../context'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import More from '../More/More'
import { Sidebar } from '../Navbar/Sidebar'
import { Navbar } from '../Navbar/Navbar'
import Index from '../Jumbotoron'
import Services from '../services/Services'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <AppProvider>
      <Hero />
      <Navbar />
      <Sidebar />
      <Banner />
      <FeaturedProducts />
      <Index />
      <Services />
      <More />
      <Footer />
    </AppProvider>
  )
}

export default Home
