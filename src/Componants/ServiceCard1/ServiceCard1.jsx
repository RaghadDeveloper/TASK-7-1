import React from 'react'
import './ServiceCard1.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


export default function ServiceCard({img, title}) {
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <img src={img} alt="" className='icon m-3 p-2 rounded' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Collaboraticely formulate principle capital. Progressively evolve user revolutionary hosting services.
                </Card.Text>
                <Button variant="primary" className='rounded-pill bg-light text-black'>Read more <MdOutlineKeyboardDoubleArrowRight />
                </Button>
            </Card.Body>
        </Card>

    )
}
