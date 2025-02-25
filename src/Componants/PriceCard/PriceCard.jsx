import React from 'react'
import './PriceCard.css'
import Card from 'react-bootstrap/Card';
import { TbArrowNarrowRight } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function PriceCard({ title, price, features, iconSrc }) {
    return (
        <Card className='pricing-card mx-2 p-3' style={{ width: '18rem' }}>
            <div className='card-intro w-100 p-3 d-flex justify-content-between align-items-center text-light'>
                <div>
                    <h6>{title}</h6>
                    <p><span className='fs-4'>${price}</span>/Month</p>
                </div>
                <img src={iconSrc} alt="" />
            </div>
            <Card.Body>
                <ul className='p-0 d-flex flex-column gap-2'>
                    {features.map((feature, index) => (
                        <li key={index} className='d-flex justify-content-between align-items-center m-0'>
                            <p className='d-flex align-items-center gap-1 m-0'>
                                {feature.included ? (
                                    <GiCheckMark className='primary-color' />
                                ) : (
                                    <RxCross2 className='text-danger' />
                                )}
                                {feature.text}
                            </p>
                            <FaRegCircleQuestion />
                        </li>
                    ))}
                </ul>
            </Card.Body>
            <button className='w-100 bg-light'>GET STARTED NOW <TbArrowNarrowRight /></button>
        </Card>
    )
}
