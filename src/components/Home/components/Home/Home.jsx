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
const Home = () => {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <Submenu />
      <Sidebar />
      <Banner />
      <More />
      <Footer />
    </AppProvider>
  )
}

export default Home
