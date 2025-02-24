import './Client.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { RiDoubleQuotesR } from "react-icons/ri";
import CenterTitle from '../CenterTitle/CenterTitle';

export default function Client() {
  return (
    <>
    
    <section className='client-sec p-5 position-relative'>
        <section className='contactus container my-5 p-5 d-flex flex-wrap justify-content-center align-items-center gap-5 row-gap-1 position-absolute'>
            <img src="./../../src/assets/images/ctaThumb1_1.webp" alt="" width={'180px'}/>
            <div className='text-light d-flex flex-column justify-content- align-items-start gap-3'>
                <h2 className='fs-6 d-flex gap-2 align-items-center text-light'><TbArrowNarrowLeft />CONTACTUS<TbArrowNarrowRight /></h2>
                <p>24/7 Expert Hosting Support Our Customers Love</p>
            </div>
            <button className='rounded-pill px-4 py-2'>TALK TO A SPECIALIST <TbArrowNarrowRight /></button>
        </section>
        <div className="container d-flex flex-column align-items-center gap-5">
            <CenterTitle title={'TESTIMONIALS'} text={'Our Latest Client Feedback'} />
            <Row className='w-100 d-flex flex-wrap justify-content-center row-gap-5'>
                <Col lg={4} md={8} sm={12}>
                <Card className='w-100 client-card rounded p-3 d-none d-lg-flex d-md-flex' style={{ width: '18rem' }}>
                    <div className='p-2 d-flex align-items-center fs-4 text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><CiStar className='fs-3'/></div>
                    <Card.Body>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-3'>
                                <img src="./../../src/assets/images/testiThumb3_1.webp" alt="" />
                                <div>
                                    <h6>Kristin Watson</h6>
                                    <p className='m-0'>Web Designer</p>
                                </div>
                            </div>
                            <RiDoubleQuotesR className='fs-1 text-body-tertiary'/>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={4} md={8} sm={12}>
                <Card className='w-100 client-mid-card rounded p-3' style={{ width: '18rem' }}>
                    <div className='p-2 d-flex align-items-center fs-4 text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><CiStar className='fs-3'/></div>
                    <Card.Body>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-3'>
                                <img src="./../../src/assets/images/testiThumb3_2.webp" alt="" />
                                <div>
                                    <h6>Theresa Webb</h6>
                                    <p className='m-0'>Tech enthusiost</p>
                                </div>
                            </div>
                            <RiDoubleQuotesR className='fs-1 text-light'/>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={4} md={8} sm={12}>
                <Card className='w-100 client-card rounded p-3 d-none d-lg-flex d-md-flex' style={{ width: '18rem' }}>
                    <div className='p-2 d-flex align-items-center fs-4 text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><CiStar className='fs-3'/></div>
                    <Card.Body>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-3'>
                                <img src="./../../src/assets/images/testiThumb3_3.webp" alt="" />
                                <div>
                                    <h6>Ronald Richards</h6>
                                    <p className='m-0'>Web Enterprenuor</p>
                                </div>
                            </div>
                            <RiDoubleQuotesR className='fs-1 text-body-tertiary'/>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <div className='line d-flex justify-content-center'><div className='mid-line'></div></div>
        </div>
    </section>
    </>
  )
}
