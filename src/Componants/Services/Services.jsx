import './Services.css'
import React from 'react'
import LeftTitle from '../LeftTitle/LeftTitle';
import ServiceCard1 from '../ServiceCard1/ServiceCard1';
import ServiceCard2 from '../ServiceCard2/ServiceCard2';


export default function Services() {
    return (
        <section className='py-5'>
            <LeftTitle title={'OUR SERVICES'} text={'Elevating Businesses With IT Ingenuity'} />
            <div className='card-group1 my-5 d-flex flex-wrap justify-content-center gap-5'>
                <ServiceCard1 img={'./../../src/assets/images/serviceIcon1_1.svg'} title={'Woo Commerce'} />
                <ServiceCard1 img={'./../../src/assets/images/serviceIcon1_2.svg'} title={'CRM Solutions'} />
                <ServiceCard1 img={'./../../src/assets/images/serviceIcon1_3.svg'} title={'Web Design'} />
                <ServiceCard1 img={'./../../src/assets/images/serviceIcon1_4.svg'} title={'Data Guard Sentinel'} />
            </div>

            <div className='card-group2 py-5 position-relative'>
                <img src="./../../src/assets/images/video.webp" alt="" className='video container' />
                <iframe
                    className='video container'
                    src="https://www.youtube.com/embed/BU0HuZLGSuU?si=AKFEZJ6yZ6bO1VpH"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video player"
                ></iframe>
                <div className='container d-flex flex-wrap justify-content-between'>
                    <ServiceCard2 num={'01'} title={'Requirement'} text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />
                    <ServiceCard2 num={'02'} title={'UI/UX Design'} text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />
                    <ServiceCard2 num={'03'} title={'Prototype'} text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />
                    <ServiceCard2 num={'04'} title={'Development'} text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />

                </div>
            </div>
        </section>
    )
}
