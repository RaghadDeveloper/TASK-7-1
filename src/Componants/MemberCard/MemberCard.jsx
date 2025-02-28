import React from 'react'
import './MemberCard.css'
import Card from 'react-bootstrap/Card';
import { FiShare2 } from "react-icons/fi";

export default function MemberCard({img, name, desc}) {
    return (
        <Card className='w-100 mem-card p-0 rounded text-light' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <FiShare2 className='share-icon text-light' />
            <Card.Body className='body rounded d-flex flex-column justify-content-center align-items-center '>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc} </Card.Text>
            </Card.Body>
        </Card>
    )
}
