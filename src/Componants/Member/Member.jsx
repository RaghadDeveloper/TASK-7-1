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
import MemberCard from '../MemberCard/MemberCard';

export default function Member() {

    const data = [
        {
            'img':'./../../src/assets/images/04.webp',
            'name':'Masirul Islam',
            'desc':'Web Designer'
        },
        {
            'img':'./../../src/assets/images/05.webp',
            'name':'Jessica Mardol',
            'desc':'Cyber Expert'
        },
        {
            'img':'./../../src/assets/images/06.webp',
            'name':'Arnold Hemingway',
            'desc':'Web Expert'
        },
        {
            'img':'./../../src/assets/images/07.webp',
            'name':'Shikon Hoque',
            'desc':'Data Analyst'
        }
    ]
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
                    {
                        data.map((item, index)=>(
                            <Col lg={3} md={6} sm={12}>
                                <MemberCard img={item.img} name={item.name} desc={item.desc} />
                            </Col>
                        ))
                    }
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
