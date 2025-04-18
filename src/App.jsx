import React from 'react'
import Hero from './components/Hero'
import Chat from './components/Chat'
import Businesses from './components/Businesses'
import Footer from './components/Footer'
import BackToTop from './components/common/BackToTop'

const App = () => {
  return (
    <>
      <Hero />
      <Chat />
      <Businesses />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
