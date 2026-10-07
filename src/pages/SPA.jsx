
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Services from '../components/Services';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import Client from '../components/Client';
import Bio from '../components/Bio';
import MapView from '../components/MapView';
import Contact from '../components/Contact';
import About from '../components/About';
export default function SPA() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Featured/>
      <Bio/>
      <Testimonials/>
      <Client/>
      <Contact/>
      <MapView/>
      <Footer/>
    </>
  )
}
