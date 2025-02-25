import './Client.css'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";
import CenterTitle from '../CenterTitle/CenterTitle';
import ClientCard from '../ClientCard/ClientCard';

export default function Client() {

    const data =[
        {
            "id": 1,
            'text': 'Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.',
            'img': './../../src/assets/images/testiThumb3_1.webp',
            'name': 'Kristin Watson',
            'desc': 'Web Designer'
        },
        {
            "id": 2,
            'text': 'Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.',
            'img': './../../src/assets/images/testiThumb3_2.webp',
            'name': 'Theresa Webb',
            'desc': 'Tech enthusiost'
        },
        {
            "id": 3,
            'text': 'Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.',
            'img': './../../src/assets/images/testiThumb3_3.webp',
            'name': 'Ronald Richards',
            'desc': 'Web Enterprenuor'
        },
    ]
    return (
        <>

            <section className='client-sec p-5 position-relative'>
                <section className='contactus container my-5 p-5 d-flex flex-wrap justify-content-center align-items-center gap-5 row-gap-1 position-absolute'>
                    <img src="./../../src/assets/images/ctaThumb1_1.webp" alt="" width={'180px'} />
                    <div className='text-light d-flex flex-column justify-content- align-items-start gap-3'>
                        <h2 className='fs-6 d-flex gap-2 align-items-center text-light'><TbArrowNarrowLeft />CONTACTUS<TbArrowNarrowRight /></h2>
                        <p>24/7 Expert Hosting Support Our Customers Love</p>
                    </div>
                    <button className='rounded-pill px-4 py-2'>TALK TO A SPECIALIST <TbArrowNarrowRight /></button>
                </section>
                <div className="container d-flex flex-column align-items-center gap-5">
                    <CenterTitle title={'TESTIMONIALS'} text={'Our Latest Client Feedback'} />
                    <Row className='w-100 d-flex flex-wrap justify-content-center row-gap-5'>

                        {
                            data.map((item, index) => (
                                <Col lg={4} md={8} sm={12}>
                                    <ClientCard id={item.id} text={item.text} img={item.img} name={item.name} desc={item.desc} />
                                </Col>
                            ))
                        }
                    </Row>
                    <div className='line d-flex justify-content-center'><div className='mid-line'></div></div>
                </div>
            </section>
        </>
    )
}
