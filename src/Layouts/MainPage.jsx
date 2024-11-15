import Navbar from "../Componants/Navbar/Navbar"
import Hero from '../Componants/Hero/Hero';
import Services from '../Componants/Services/Services';
import Pricing from '../Componants/Pricing/Pricing';
import Client from '../Componants/Client/Client';
import Blog from '../Componants/Blog/Blog';
import Footer from '../Componants/Footer/Footer';


const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <Client />
        <Blog />
        <Footer name='home'/> 
    </div>
  )
}

export default MainPage