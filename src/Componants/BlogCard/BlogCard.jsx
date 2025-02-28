import React from 'react'
import './BlogCard.css'
import Card from 'react-bootstrap/Card';
import { TbArrowNarrowRight } from "react-icons/tb";

export default function BlogCard({img, date, title, profileImg, name, desc}) {
    return (
        <div className='blog-card d-flex justify-content-center position-relative'>
            <img src={img} alt="" width={'400px'} />
            <Card className='b-card shadow px-2' style={{ width: '18rem' }}>
                <Card.Body className='d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center gap-4'>
                        <p className='primary-color add-border rounded-pill px-3 py-1'>Uncategorized</p>
                        <p>{date}</p>
                    </div>
                    <Card.Title className='border-bottom pb-3'>{title}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={profileImg} alt="" />
                            <div>
                                <h6>{name}</h6>
                                <p className='m-0'>{desc}</p>
                            </div>
                        </div>
                        <TbArrowNarrowRight className='fs-1' />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
