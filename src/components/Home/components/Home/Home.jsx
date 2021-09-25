import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import { Navbar } from '../Navbar/Navbar'
import '../index.css'
import { AppProvider } from '../context'
import { Submenu } from '../Navbar/Submenu'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import More from '../More/More'
const Home = () => {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <Navbar />
      <Submenu />
      <Banner />
      <More />
      <Footer />
    </AppProvider>
  )
}

export default Home
