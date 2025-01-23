import { BrowserRouter } from 'react-router-dom';
import BlogSection from './components/BlogSection';
import ExploreServices from './components/ExploreServices';
import VideoInstruction from './components/VideoInstruction';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About';

function App() {

  return (

    <BrowserRouter>
    <Navbar />
    <Landing />
    <ExploreServices />
    <About/>
    <VideoInstruction/>
    <Clients />
    <BlogSection/>
    <FAQ/>
    <Footer/>
  </BrowserRouter>

  )
}

export default App
