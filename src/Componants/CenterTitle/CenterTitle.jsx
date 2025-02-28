import React from 'react'
import './CenterTitle.css'
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CenterTitle({title, text}) {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='fs-6 d-flex gap-2 align-items-center'><TbArrowNarrowLeft />{title}<TbArrowNarrowRight /></h2>
            <p className='fs-2 fw-bolder text-center'>{text}</p>
        </div>
    )
}
