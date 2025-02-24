import Navbar from "../Componants/Navbar/Navbar"
import Hero from '../Componants/Hero/Hero';
import Services from '../Componants/Services/Services';
import Pricing from '../Componants/Pricing/Pricing';
import Client from '../Componants/Client/Client';
import Blog from '../Componants/Blog/Blog';
import Footer from '../Componants/Footer/Footer';
import { Outlet } from "react-router-dom";
import Platforms from "../Componants/Platforms/Platforms";

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Platforms />
        <Services />
        <Pricing />
        <Client />
        <Blog />
        <Footer name='home'/> 
        <Outlet />
    </div>
  )
}

export default MainPage