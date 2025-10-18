import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Terms from './components/Terms'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import './App.css'

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Terms />
      </main>
      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
