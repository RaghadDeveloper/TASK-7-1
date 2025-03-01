import { Col, Row } from 'react-bootstrap';
import './Contact.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import img from '../../assets/images/video.webp'

export default function Contact() {
  return (
    <>
    <section className='w-100 p-5 my-5 d-flex justify-content-center'>

      <Row className='w-100 d-flex justify-content-center gap-4'>
        <Col lg={5} md={10} sm={11}>
          <Card className='contact-card text-light' style={{ width: '18rem' }}>
            <Card.Body className='d-flex flex-column gap-3 my-3'>
              <div className='d-flex align-items-center gap-3'>
                <span  className='icon-border fs-1'><FaPhoneVolume /></span>
                  <div>
                      <p className='m-0'>CallUs 7/27</p>
                      <a href='tel:+208-555-0112' className='text-decoration-none fw-bold text-light'>+208-555-0112</a>
                  </div>
              </div>
              <span className='contact-line'></span>
              <div className='d-flex align-items-center gap-3'>
                <span  className='icon-border fs-1'><MdAttachEmail /></span>
                  <div>
                      <p className='m-0'>Make a Quote</p>
                      <a href='mailto:Infotech@gmail.com' className='text-decoration-none fw-bold text-light'>Infotech@gmail.com</a>
                  </div>
              </div>
              <span className='contact-line'></span>
              <div className='d-flex align-items-center gap-3'>
                <span  className='icon-border fs-1'><FaLocationDot /></span>
                  <div>
                      <p className='m-0'>Location </p>
                      <a href='#' className='text-decoration-none fw-bold text-light'>4517 Washington ave.</a>
                  </div>
              </div>
            </Card.Body>
            <Card.Img variant="top" src={img} />
          </Card>
        </Col>

        <Col lg={5} md={10} sm={11}>
          <Card className='contact-form' style={{ width: '18rem' }}>
            <Card.Body className='d-flex flex-column justify-content-center gap-3'>
              <Card.Title className='fs-2'>Ready to Get Started?</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

              <form className='w-100 d-flex flex-column gap-3'>
              <div className='w-100 d-flex gap-3'>
                <div className='email-name  d-flex flex-column gap-3'>
                  <label>Your Name*</label>
                  <input type="text" className='w-100'/>
                </div>
                <div className='email-name  d-flex flex-column gap-3'>
                  <label>Your Email*</label>
                  <input type="email" className='w-100'/>
                </div>
              </div>
              <label htmlFor="" className='d-block'>Write Message* </label>
              <textarea className='w-100'></textarea>

              <Button variant="primary" className='rounded-pill d-flex gap-2 align-items-center'>Go somewhere<TbArrowNarrowRight /></Button>
              </form>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4661.044727732992!2d144.9673476409778!3d-37.817638820110346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2s!4v1731662934803!5m2!1sen!2s" width="100%" height="600" ></iframe>
    </>
  )
}
