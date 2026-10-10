import Footer from '../components/Footer';
import Services from './Services';
import Featured from './Featured';
import Testimonials from '../components/Testimonials';
import Client from './Client';
import Bio from './Bio';
import MapView from '../components/MapView';
import Contact from '../components/Contact';
import About from './About';
import Home from './Home';
export default function SPA() {
  return (
    <>
      <Home/>
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
