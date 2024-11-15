import './Services.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";
import { VscTriangleRight } from "react-icons/vsc";


export default function Services() {
    return (
        <section className='py-5'> 
            <div className='container'>
                <h2 className='fs-6 d-flex gap-2 align-items-center'><TbArrowNarrowLeft />OUR SERVICES<TbArrowNarrowRight /></h2>

                <div className='d-flex justify-content-between flex-wrap gap-4'>
                    <p className='fs-2 fw-bolder'>Elevating Businesses With IT Ingenuity</p>
                    <div className='d-flex gap-2'>
                        <TbArrowNarrowLeft className='arrow-icon1 fs-1 p-1 text-secondary shadow-sm rounded-circle'/>
                        <TbArrowNarrowRight className='arrow-icon2 fs-1 p-1 text-light rounded-circle'/>
                    </div>
                </div>
            </div>
            <div className='card-group1 my-5 d-flex flex-wrap justify-content-center gap-5'>
                <Card className='card' style={{ width: '18rem' }}>
                    <img src="./../../src/assets/images/serviceIcon1_1.svg" alt="" className='icon m-3 p-2 rounded'/>
                    <Card.Body>
                        <Card.Title>Woo Commerce</Card.Title>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <Button variant="primary" className='rounded-pill bg-light text-black'>Read more <MdOutlineKeyboardDoubleArrowRight />
                        </Button>
                    </Card.Body>
                </Card>
                <Card className='card d-none d-lg-flex d-md-flex' style={{ width: '18rem' }}>
                <img src="./../../src/assets/images/serviceIcon1_2.svg" alt="" className='icon m-3 p-2 rounded'/>
                <Card.Body>
                        <Card.Title>CRM Solutions</Card.Title>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <Button variant="primary" className='rounded-pill bg-light text-black'>Read more <MdOutlineKeyboardDoubleArrowRight />
                        </Button>
                    </Card.Body>
                </Card>
                <Card className='card d-none d-lg-flex d-md-flex' style={{ width: '18rem' }}>
                <img src="./../../src/assets/images/serviceIcon1_3.svg" alt="" className='icon m-3 p-2 rounded'/>
                <Card.Body>
                        <Card.Title>Web Design</Card.Title>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <Button variant="primary" className='rounded-pill bg-light text-black'>Read more <MdOutlineKeyboardDoubleArrowRight />
                        </Button>
                    </Card.Body>
                </Card>
                <Card className='card d-none d-lg-flex d-md-flex' style={{ width: '18rem' }}>
                <img src="./../../src/assets/images/serviceIcon1_4.svg" alt="" className='icon m-3 p-2 rounded'/>
                <Card.Body>
                        <Card.Title>Data Guard Sentinel</Card.Title>
                        <Card.Text>
                            Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                        </Card.Text>
                        <Button variant="primary" className='rounded-pill bg-light text-black'>Read more <MdOutlineKeyboardDoubleArrowRight />
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='card-group2 py-5 position-relative'>
            <img src="./../../src/assets/images/video.webp" alt="" className='video container'/>
            <VscTriangleRight className='video-icon'/>
                <div className='container d-flex flex-wrap justify-content-between'>
                <Card className='card2 text-light' style={{ width: '18rem' }}>
                    <Card.Body>
                        <p className='fs-1'>01</p>
                        <Card.Title>Requirement</Card.Title>
                        <Card.Text>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card2 text-light' style={{ width: '18rem' }}>
                    <Card.Body>
                        <p className='fs-1'>02</p>
                        <Card.Title>UI/UX Design</Card.Title>
                        <Card.Text>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card2 text-light' style={{ width: '18rem' }}>
                    <Card.Body>
                        <p className='fs-1'>03</p>
                        <Card.Title>Prototype</Card.Title>
                        <Card.Text>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card2 text-light' style={{ width: '18rem' }}>
                    <Card.Body>
                        <p className='fs-1'>04</p>
                        <Card.Title>Development</Card.Title>
                        <Card.Text>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </section>
    )
}
