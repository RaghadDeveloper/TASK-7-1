import Footer from '../Componants/Footer/Footer';
import Navbar2 from '../Componants/Navbar2/Navbar2';
import Hero2 from '../Componants/Hero2/Hero2';
import Member from '../Componants/Member/Member';
import Specializations from '../Componants/Specializations/Specializations';

const About = () => {
  const data = ['Cyber Security','IT Solution','Technology','Data Security']
  return (
    <div>
        <Navbar2 />
        <Hero2 name="about" title='About Us'/>
        <Specializations data={data}/>
        <Member />
        <Footer name= "about"/>
        
    </div>
  )
}

export default About