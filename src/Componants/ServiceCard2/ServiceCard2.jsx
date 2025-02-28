import React from 'react'
import './ServiceCard2.css'
import Card from 'react-bootstrap/Card';

export default function ServiceCard2({num, title, text}) {
    return (
        <Card className='card2 text-light' style={{ width: '18rem' }}>
            <Card.Body>
                <p className='num'>{num}</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
