import Footer from '../Componants/Footer/Footer';
import Navbar2 from '../Componants/Navbar2/Navbar2';
import Hero2 from '../Componants/Hero2/Hero2';
import Contact from '../Componants/Contact/Contact';

const ContactPage = () => {
  return (
    <div>
        <Navbar2 />
        <Hero2 name='contact' title='Contact Us'/>
        <Contact />
        <Footer name="contact" />
    </div>
  )
}

export default ContactPage