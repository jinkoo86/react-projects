import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidbarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidbarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidbarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
