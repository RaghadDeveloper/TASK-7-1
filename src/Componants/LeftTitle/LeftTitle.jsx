import React from 'react'
import './LeftTitle.css'
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function LeftTitle({title, text}) {
    return (
        <div className='container'>
            <h2 className='fs-6 d-flex gap-2 align-items-center'><TbArrowNarrowLeft />{title}<TbArrowNarrowRight /></h2>

            <div className='d-flex justify-content-between flex-wrap gap-4'>
                <p className='fs-2 fw-bolder'>{text}</p>
                <div className='d-flex gap-2'>
                    <TbArrowNarrowLeft className='arrow-icon1 fs-1 p-1 text-secondary shadow-sm rounded-circle' />
                    <TbArrowNarrowRight className='arrow-icon2 fs-1 p-1 text-light rounded-circle' />
                </div>
            </div>
        </div>
    )
}
