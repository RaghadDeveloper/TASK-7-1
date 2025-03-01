import React from 'react'
import './HeroRev.css'
import { FaStar } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import img from '../../assets/images/profileShape1_1.webp'

export default function HeroRev({titleIcon , title}) {
    return (
        <div className={`${title== 'Google'? 'gg': ''} d-flex flex-column gap-4`}>
            <div className='d-flex align-items-center gap-2'>
                {titleIcon && <RiStarSFill className='fs-3 green-star' />}
                <h5>{title}</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-3'>
                <img src={img} alt="profileShape" />
                <div className='d-flex flex-column gap-2'>
                    <div className='d-flex gap-1'><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /></div>
                    <p>450+ reviews</p>
                </div>
            </div>
        </div>
    )
}
