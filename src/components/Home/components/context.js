import React, { useState, useContext } from 'react'
import sublinks from '../data'

const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
    console.log('opening')
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        closeSubmenu,
        openSidebar,
        openSubmenu,
        closeSidebar,
        isSubmenuOpen,
        isSidebarOpen,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
