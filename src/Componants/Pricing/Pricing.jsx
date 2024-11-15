import './Pricing.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Pricing() {
    return (
        <section className='pric-sec d-flex flex-column justify-content-center align-items-center'>
            <h2 className='fs-6 d-flex gap-2 align-items-center'><TbArrowNarrowLeft />OUR PRICING<TbArrowNarrowRight /></h2>
            <p className='fs-2 fw-bolder'>Our Awesome Pricing Plans</p>
            <div className='d-flex gap-4 align-items-end'>
                <div className='month-year rounded-pill d-flex justify-content-center align-items-center px-3 py-2 gap-3'>
                    <p className='monthly text-light rounded-pill p-2 m-0'>Monthly</p>
                    <p className='m-0'>Yearly</p>
                </div>
                <img src="./../../src/assets/images/pricingIcon1_2.svg" alt="" />
                <p className='save'>Save 25%</p>
            </div>

            <div className='p-5 container d-flex flex-wrap justify-content-center gap-5'>
                <Card className='pricing-card mx-2 p-3' style={{ width: '18rem' }}>
                    <div className='card-intro w-100 p-3 d-flex justify-content-between align-items-center text-light'>
                        <div>
                            <h6>Regular Plans</h6>
                            <p><span className='fs-4'>$49</span>/Month</p>
                        </div>
                        <img src="./../../src/assets/images/pricingIcon1_1.svg" alt="" />
                    </div>
                    <Card.Body>
                        <ul className='p-0 d-flex flex-column gap-2'>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><RxCross2 className='text-danger'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><RxCross2 className='text-danger'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            
                        </ul>
                    </Card.Body>
                        <button className='w-100 bg-light'>GET STARTED NOW <TbArrowNarrowRight /></button>
                </Card>
                <Card className='pricing-card mx-2 p-3' style={{ width: '18rem' }}>
                    <div className='card-intro w-100 p-3 d-flex justify-content-between align-items-center text-light'>
                        <div>
                            <h6>Regular Plans</h6>
                            <p><span className='fs-4'>$49</span>/Month</p>
                        </div>
                        <img src="./../../src/assets/images/pricingIcon1_1.svg" alt="" />
                    </div>
                    <Card.Body>
                        <ul className='p-0 d-flex flex-column gap-2'>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><RxCross2 className='text-danger'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><RxCross2 className='text-danger'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            
                        </ul>
                    </Card.Body>
                        <button className='w-100 bg-light'>GET STARTED NOW <TbArrowNarrowRight /></button>
                </Card>
                <Card className='pricing-card mx-2 p-3' style={{ width: '18rem' }}>
                    <div className='card-intro w-100 p-3 d-flex justify-content-between align-items-center text-light'>
                        <div>
                            <h6>Regular Plans</h6>
                            <p><span className='fs-4'>$49</span>/Month</p>
                        </div>
                        <img src="./../../src/assets/images/pricingIcon1_1.svg" alt="" />
                    </div>
                    <Card.Body>
                        <ul className='p-0 d-flex flex-column gap-2'>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><GiCheckMark className='primary-color'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><RxCross2 className='text-danger'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            <li className='d-flex justify-content-between align-items-center m-0'><p className='d-flex align-items-center gap-1 m-0'><RxCross2 className='text-danger'/> 100 GB SSD Storage</p><FaRegCircleQuestion /></li>
                            
                        </ul>
                    </Card.Body>
                        <button className='w-100 bg-light'>GET STARTED NOW <TbArrowNarrowRight /></button>
                </Card>
            </div>

        </section>
    )
}
