import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import ExploreServices from "./components/ExploreServices"
import About from "./components/About"
import VideoInstruction from "./components/VideoInstruction"
import Clients from "./components/Clients"
import BlogSection from "./components/BlogSection"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <ExploreServices />
              <About />
              <VideoInstruction />
              <Clients />
              <BlogSection />
              <FAQ />
            </>
          }
        />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ExploreServices />} />
       
      </Routes>
      <Footer />
      <SpeedInsights />
    </Router>
  )
}

export default App


