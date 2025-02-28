import './Pricing.css'
import React from 'react'
import CenterTitle from '../CenterTitle/CenterTitle';
import PriceCard from '../PriceCard/PriceCard';

export default function Pricing() {

    const cardData = [
        {
            title: 'Regular Plans',
            price: 49,
            iconSrc: './../../src/assets/images/pricingIcon1_1.svg',
            features: [
                { text: '100 GB SSD Storage', included: true },
                { text: '200 GB Bandwidth', included: true },
                { text: 'Unlimited Databases', included: true },
                { text: 'Free SSL Certificate', included: true },
                { text: '24/7 Support', included: true },
                { text: 'Advanced Analytics', included: false },
                { text: 'Dedicated IP', included: false },
            ],
        },
        {
            title: 'Regular Plans',
            price: 49,
            iconSrc: './../../src/assets/images/pricingIcon1_1.svg',
            features: [
                { text: '100 GB SSD Storage', included: true },
                { text: '200 GB Bandwidth', included: true },
                { text: 'Unlimited Databases', included: true },
                { text: 'Free SSL Certificate', included: true },
                { text: '24/7 Support', included: true },
                { text: 'Advanced Analytics', included: false },
                { text: 'Dedicated IP', included: false },
            ],
        },
        {
            title: 'Regular Plans',
            price: 49,
            iconSrc: './../../src/assets/images/pricingIcon1_1.svg',
            features: [
                { text: '100 GB SSD Storage', included: true },
                { text: '200 GB Bandwidth', included: true },
                { text: 'Unlimited Databases', included: true },
                { text: 'Free SSL Certificate', included: true },
                { text: '24/7 Support', included: true },
                { text: 'Advanced Analytics', included: false },
                { text: 'Dedicated IP', included: false },
            ],
        }
    ];


    return (
        <section className='pric-sec d-flex flex-column justify-content-center align-items-center'>
            <CenterTitle title={'OUR PRICING'} text={'Our Awesome Pricing Plans'} />
            <div className='price-head px-5 d-flex gap-4 justify-content-center align-items-end flex-wrap'>
                <div className='month-year rounded-pill d-flex justify-content-center align-items-center px-3 py-2 gap-3'>
                    <p className='monthly text-light rounded-pill p-2 m-0'>Monthly</p>
                    <p className='m-0'>Yearly</p>
                </div>
                <img src="./../../src/assets/images/pricingIcon1_2.svg" alt="" />
                <p className='save'>Save 25%</p>
            </div>

            <div className='p-5 container d-flex flex-wrap justify-content-center gap-5'>

                {
                    cardData.map((e, index) => (
                        <PriceCard title={e.title}
                            price={e.price}
                            iconSrc={e.iconSrc}
                            features={e.features}
                        />
                    ))
                }
            </div>

        </section>
    )
}
