import Footer from '../Componants/Footer/Footer';
import Navbar2 from '../Componants/Navbar2/Navbar2';
import Hero2 from '../Componants/Hero2/Hero2';
import Member from '../Componants/Member/Member';

const About = () => {
  return (
    <div>
        <Navbar2 />
        <Hero2 name="about" title='About Us'/>
        <Member />
        <Footer name= "about"/>
        
    </div>
  )
}

export default About