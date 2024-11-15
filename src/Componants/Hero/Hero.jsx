import './Hero.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa6";
import { GoPulse } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";


export default function Hero() {
  return (
    <>
    <section className='hero mt-5 pt-0 px-2 position-relative top-0 d-flex justify-content-evenly align-items-end flex-wrap text-white flex-row-reverse'>
        <img src="./../../src/assets/images/heroThumb1_1.webp" alt="hero" width={'425px'}/>
        <img src="./../../src/assets/images/heroShape1_1.webp" alt=""className='shape1 d-none d-lg-block' />
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
                <div className=' d-flex flex-column gap-4'>
                    <div className='d-flex align-items-center gap-2'>
                        <RiStarSFill className='fs-3 green-star'/>
                        <h5>Trunstipiolot</h5>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <img src="./../../src/assets/images/profileShape1_1.webp" alt="profileShape" />
                        <div className='d-flex flex-column gap-2'>
                            <div className='d-flex gap-1'><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /></div>
                            <p>450+ reviews</p>
                        </div>
                    </div>
                </div>
                <span className='hero-line'></span>
                <div className='gg d-flex flex-column gap-4'>
                    <h5>Google</h5>
                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <img src="./../../src/assets/images/profileShape1_1.webp" alt="profileShape" />
                        <div className='d-flex flex-column gap-2'>
                            <div className='d-flex gap-1'><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /></div>
                            <p>450+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <img src="./../../src/assets/images/heroShape1_3.webp" alt="heroShape1_3" className='hero-shape bg-light'/>
    
    <section className='border-bottom my-5 p-5 d-flex flex-wrap justify-content-center gap-5 '>
        <img src="./../../src/assets/images/brandLogo1_1.svg" alt="brandLogo1" width={'190px'} />
        <img src="./../../src/assets/images/brandLogo1_2.svg" alt="brandLogo2" width={'190px'} />
        <img src="./../../src/assets/images/brandLogo1_3.svg" alt="brandLogo3" width={'190px'} />
        <img src="./../../src/assets/images/brandLogo1_4.svg" alt="brandLogo4" width={'190px'} />
        <img src="./../../src/assets/images/brandLogo1_5.svg" alt="brandLogo5" width={'190px'} />
    </section>
    </>
  )
}
