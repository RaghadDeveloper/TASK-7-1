import './Footer.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";


export default function Footer(pageName) {
    return (
        <footer>

            <section className={pageName.name=='home'?'d-none':'about-contact-footer container rounded p-5 d-flex flex-wrap justify-content-between gap-5'}>
                <div className='d-flex gap-4 text-light align-items-center'>
                    <span  className='icon-border fs-1 primary-color bg-light'><FaLocationDot /></span>
                    <div className='d-flex flex-column gap-2'>
                        <h6>Adress</h6>
                        <a href='#' className='text-decoration-none text-light'>4648 Rocky Road Philadelphia PA</a>
                    </div>
                </div>
                <span className='col-line d-none d-lg-block'></span>
                <div className='d-flex gap-4 text-light align-items-center'>
                    <span  className='icon-border fs-1 primary-color bg-light'><MdAttachEmail /></span>
                    <div className='d-flex flex-column gap-2'>
                        <h6>Send Email</h6>
                        <a href='mailto:info@example.com' className='text-decoration-none text-light'>info@example.com</a>
                    </div>
                </div>
                <span className='col-line d-none d-lg-block'></span>
                <div className='d-flex gap-4 text-light align-items-center'>
                    <span  className='icon-border fs-1 primary-color bg-light'><FaPhoneVolume /></span>
                    <div className='d-flex flex-column gap-2'>
                        <h6>Call Emergency</h6>
                        <a href='tel:+88 0123 654 99' className='text-decoration-none text-light'>+88 0123 654 99</a>
                    </div>
                </div>
            </section>
            
            
            <div className='container d-flex flex-wrap justify-content-between gap-5 row-gap-0'>
                <Card className='card2 d-flex flex-column gap-4 py-5 text-light' style={{ width: '18rem' }}>
                    <img src="./../../src/assets/images/logoW.svg" alt="" width={'200px'} />
                    <span className='footer-line'></span>
                    <Card.Body className='p-0 mt-3'>
                        <Card.Text>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </Card.Text>
                        <div className='mt-4 d-flex gap-2'>
                            <a href='#' className='text-light'><FaFacebookF className='border fs-2 p-1' /></a>
                            <a href='#' className='text-light'><FaTwitter className='border fs-2 p-1' /></a>
                            <a href='#' className='text-light'><FaYoutube className='border fs-2 p-1' /></a>
                            <a href='#' className='text-light'><FaInstagram className='border fs-2 p-1' /></a>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='card2 d-flex flex-column gap-4 py-5 text-light' style={{ width: '18rem' }}>
                    <Card.Title >Quick Links </Card.Title>
                    <span className='footer-line'></span>
                    <Card.Body className='p-0 mt-3'>
                        <Card.Text>
                            <ul className='p-0 d-flex flex-column gap-3'>
                                <li className='list-group-item'><a href='#' className='text-light text-decoration-none'><MdOutlineKeyboardDoubleArrowRight /> Extech About </a></li>
                                <li className='list-group-item'><a href='#' className='text-light text-decoration-none'><MdOutlineKeyboardDoubleArrowRight /> Our Services </a></li>
                                <li className='list-group-item'><a href='#' className='text-light text-decoration-none'><MdOutlineKeyboardDoubleArrowRight /> Our Blogs </a></li>
                                <li className='list-group-item'><a href='#' className='text-light text-decoration-none'><MdOutlineKeyboardDoubleArrowRight /> FAQ'S </a></li>
                                <li className='list-group-item'><a href='#' className='text-light text-decoration-none'><MdOutlineKeyboardDoubleArrowRight /> Contact Us </a></li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card2 d-flex flex-column gap-4 py-5 text-light' style={{ width: '18rem' }}>
                    <Card.Title>Recent Posts</Card.Title>
                    <span className='footer-line'></span>
                    <Card.Body className='p-0 mt-3 d-flex flex-column gap-4'>
                        <div className='d-flex gap-3'>
                            <img src="./../../src/assets/images/footerThumb1_1.webp" alt="" width={'78px'} height={'78px'} />
                            <div className='d-flex flex-column justify-content-between'>
                                <p className='m-0 d-flex align-items-center gap-2'><MdOutlineCalendarMonth />15th April, 2024</p>
                                <p className='m-0'>Top 5 Most Famous</p>
                                <p className='m-0'>Technology Trend In 2024</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <img src="./../../src/assets/images/footerThumb1_2.webp" alt="" width={'78px'} height={'78px'} />
                            <div className='d-flex flex-column justify-content-between'>
                                <p className='m-0 d-flex align-items-center gap-2'><MdOutlineCalendarMonth />20th June, 2024</p>
                                <p className='m-0'>The Surfing Man Will Blow</p>
                                <p className='m-0'>Your Mind</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='card2 d-flex flex-column gap-3 py-5 text-light' style={{ width: '18rem' }}>
                    <Card.Title >Contact Us </Card.Title>
                    <span className='footer-line'></span>
                    <Card.Body className='p-0 mt-3'>
                        <Card.Text>
                            <ul className='p-0 d-flex flex-column gap-3'>
                                <li className='list-group-item d-flex align-items-center gap-2'><MdEmail /><a href='mailto:info@example.com' className='text-light text-decoration-none'>info@example.com </a></li>
                                <li className='list-group-item d-flex align-items-center gap-2'><FaPhoneAlt /> <a href='tel:+208-6666-0112' className='text-light text-decoration-none'>+208-6666-0112</a> </li>
                                <form className={(pageName.name=="contact")?'inp-but-cont':'inp-but'}>
                                    <input className={(pageName.name=="contact")?'cont-input-cont':'cont-input'} type='email' placeholder='Your email address' />
                                    <button className='d-flex justify-content-center align-items-center fs-3'><TbArrowNarrowRight /></button>
                                </form>
                                <div className='d-flex align-items-center gap-2'>
                                <input type="checkbox" className='checkbox'/>
                                <label>I agree to the <a href='#' className='text-light'>Privacy Policy.</a></label>
                                </div>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div className='footer2 mt-5 text-light p-3'>
                <div className='container d-flex flex-wrap justify-content-between align-items-center gap-3'>
                    <p className='m-0'>&copy; All Copyright 2024 by Extech</p>
                    <div className='d-flex flex-wrap gap-3'>
                        <p className='m-0'>Terms & Conditions</p>
                        <p className='m-0'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
