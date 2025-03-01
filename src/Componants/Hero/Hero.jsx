import './Hero.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa6";
import { GoPulse } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import HeroRev from '../HeroRev/HeroRev';
import heroimg from '../../assets/images/heroThumb1_1.webp'
import heroShape1 from '../../assets/images/heroShape1_1.webp'
import heroShape3 from '../../assets/images/heroShape1_3.webp'


export default function Hero() {
  return (
    <>
    <section className='hero mt-5 pt-0 px-2 position-relative top-0 d-flex justify-content-evenly align-items-end flex-wrap text-white flex-row-reverse'>
        <img src={heroimg} alt="hero" width={'425px'}/>
        <img src={heroShape1} alt=""className='shape1 d-none d-lg-block' />
        <div className='hero-sec1 mt-5 pt-5 d-flex flex-column gap-5'>
            <div className='d-flex flex-column gap-3'>
                <p className='border border-white rounded-pill d-flex justify-content-center align-items-center px-4 py-2 gap-2'>
                    <GoPulse />
                    Every Thing You Need To Create A Website
                </p>
                <h1 className=''>Business Innovation With IT Services Expertise </h1>
                <ul className='d-flex gap-3 p-0'>
                    <div className='d-flex flex-column gap-3'>
                    <li className='list-group-item'><GiCheckMark /> Deployment and Support </li>
                    <li className='list-group-item'><GiCheckMark /> Discovery and Analysis </li>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                    <li className='list-group-item'><GiCheckMark /> Flexibility and Adaptability </li>
                    <li className='list-group-item'><GiCheckMark /> Competitive Advantage </li>
                    </div>
                </ul>
                <Button className='rounded-pill d-flex justify-content-center align-items-center gap-2 px-3'>GET STARTED <FaArrowRight /> </Button>
            </div>

            <div className='hero-sec2 p-4 d-flex gap-5 mb-0'>
                <HeroRev titleIcon = {RiStarSFill} title = {'Trunstipiolot'} />
                <span className='hero-line'></span>
                <HeroRev title = {'Google'} />
            </div>
        </div>
    <img src={heroShape3} alt="heroShape1_3" className='hero-shape bg-light'/>
    </section>
    
    </>
  )
}
