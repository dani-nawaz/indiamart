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
const Home = () => {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <Navbar />
      <Submenu />
      <Sidebar />
      <Banner />
      <Index />
      <More />
      <Footer />
    </AppProvider>
  )
}

export default Home
