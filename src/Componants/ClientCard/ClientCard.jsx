import React from 'react'
import './ClientCard.css'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { RiDoubleQuotesR } from "react-icons/ri";
export default function ClientCard({id, text, img, name, desc}) {
    return (
        
        <Card className={`${id==2? 'client-mid-card d-block' : ''} w-100 client-card rounded p-3 d-lg-flex d-md-flex`} style={{ width: '18rem' }}>
            <div className='p-2 d-flex align-items-center fs-4 text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><CiStar className='fs-3' /></div>
            <Card.Body>
                <Card.Text>
                    {text}
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-3'>
                        <img src={img} alt="" />
                        <div>
                            <h6>{name}</h6>
                            <p className='m-0'>{desc}</p>
                        </div>
                    </div>
                    <RiDoubleQuotesR className='fs-1 text-body-tertiary' />
                </div>
            </Card.Body>
        </Card>
    )
}
