import './Member.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { DiEnvato } from "react-icons/di";
import { FiShare2 } from "react-icons/fi";

export default function Member() {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=' d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='d-flex flex-column gap-4'>
                        <h2 className='fs-6 d-flex gap-2 align-items-center'><TbArrowNarrowLeft />TEAM MEMBERS<TbArrowNarrowRight /></h2>
                        <p className='fs-2 fw-bolder'>Our Dedicated Team Members</p>
                    </div>
                    <Button className='mem-btn rounded-pill d-flex justify-content-center align-items-center gap-2 px-3 py-2'>All Members <FaArrowRight /> </Button>
                </div>
                <Row className='d-flex flex-wrap justify-content-between row-gap-5 my-5'>
                    <Col lg={3} md={6} sm={12}>
                    <Card className='w-100 mem-card p-0 rounded text-light' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./../../src/assets/images/04.webp" />
                        <FiShare2 className='share-icon text-light'/>
                        <Card.Body className='body rounded d-flex flex-column justify-content-center align-items-center '>
                            <Card.Title>Masirul Islam</Card.Title>
                            <Card.Text>Web Designer </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <Card className='w-100 mem-card p-0 rounded text-light' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./../../src/assets/images/05.webp" />
                        <FiShare2 className='share-icon text-light'/>
                        <Card.Body className='body rounded d-flex flex-column justify-content-center align-items-center '>
                            <Card.Title>Jessica Mardol</Card.Title>
                            <Card.Text>Cyber Expert</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <Card className='w-100 mem-card p-0 rounded text-light' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./../../src/assets/images/06.webp" />
                        <FiShare2 className='share-icon text-light'/>
                        <Card.Body className='body rounded d-flex flex-column justify-content-center align-items-center '>
                            <Card.Title>Arnold Hemingway</Card.Title>
                            <Card.Text>Web Expert </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <Card className='w-100 mem-card p-0 rounded text-light' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./../../src/assets/images/07.webp" />
                        <FiShare2 className='share-icon text-light'/>
                        <Card.Body className='body rounded d-flex flex-column justify-content-center align-items-center '>
                            <Card.Title>Shikon Hoque</Card.Title>
                            <Card.Text>Data Analyst</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <div className='d-flex justify-content-center align-items-center px-4 py-5'>
                    <div className='line2 d-none d-lg-flex'></div>
                        <p className='line-text text-center my-0 mx-5 fs-5'>1k + Brand Trust Us</p>
                    <div className='line2 d-none d-lg-flex'></div>
                </div>

                <div className='d-flex flex-wrap justify-content-center gap-5 my-3'>
                    <div className='d-none d-lg-flex d-md-flex gap-5'>
                    <p className='fs-1 text-body-tertiary'><DiEnvato />envato</p>
                    <p className='fs-1 text-body-tertiary ms-5'><DiEnvato />envato</p>
                    </div>
                    <p className='fs-1 primary-color mx-5'><DiEnvato />envato</p>
                    <div className='d-none d-lg-flex d-md-flex gap-5'>
                    <p className='fs-1 text-body-tertiary me-5'><DiEnvato />envato</p>
                    <p className='fs-1 text-body-tertiary'><DiEnvato />envato</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
