import './Blog.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function Blog() {
  return (
    <section className='py-5 position-relative'>
      <div className='container'>
        <h2 className='fs-6 d-flex gap-2 align-items-center'><TbArrowNarrowLeft />BLOG & NEWS<TbArrowNarrowRight /></h2>

        <div className='d-flex justify-content-between flex-wrap gap-4'>
          <p className='fs-2 fw-bolder'>Featyred News And Insights</p>
          <div className='d-flex gap-2'>
            <TbArrowNarrowLeft className='arrow-icon1 fs-1 p-1 text-secondary shadow-sm rounded-circle' />
            <TbArrowNarrowRight className='arrow-icon2 fs-1 p-1 text-light rounded-circle' />
          </div>
        </div>
      </div>


      <div className='container my-5 d-flex flex-wrap justify-content-center gap-5'>
        <div className='blog-card position-relative'>
          <img src="./../../src/assets/images/blogThumb1_2.webp" alt="" width={'400px'}/>
          <Card className='b-card shadow px-2' style={{ width: '18rem' }}>
            <Card.Body className='d-flex flex-column gap-3'>
              <div className='d-flex align-items-center gap-4'>
                <p className='primary-color add-border rounded-pill px-3 py-1'>Uncategorized</p>
                <p>MARCH 14,2024</p>
              </div>
              <Card.Title className='border-bottom pb-3'>Best And Fastest Data Server Ever</Card.Title>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                  <img src="./../../src/assets/images/blogProfile1_2.webp" alt="" />
                  <div>
                    <h6>Kristin Watson</h6>
                    <p className='m-0'>Web Designer</p>
                  </div>
                </div>
                <TbArrowNarrowRight className='fs-1' />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='blog-card position-relative d-none d-lg-block d-md-block'>
          <img src="./../../src/assets/images/blogThumb1_3.webp" alt="" width={'400px'}/>
          <Card className='b-card shadow px-2' style={{ width: '18rem' }}>
            <Card.Body className='d-flex flex-column gap-3'>
              <div className='d-flex align-items-center gap-4'>
                <p className='primary-color add-border rounded-pill px-3 py-1'>Uncategorized</p>
                <p>MARCH 14,2024</p>
              </div>
              <Card.Title className='border-bottom pb-3'>Best And Fastest Data Server Ever</Card.Title>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                  <img src="./../../src/assets/images/blogProfile1_3.webp" alt="" />
                  <div>
                    <h6>Kristin Watson</h6>
                    <p className='m-0'>Web Designer</p>
                  </div>
                </div>
                <TbArrowNarrowRight className='fs-1' />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='blog-card position-relative d-none d-lg-block d-md-block'>
          <img src="./../../src/assets/images/blogThumb1_1.webp" alt="" width={'400px'}/>
          <Card className='b-card shadow px-2' style={{ width: '18rem' }}>
            <Card.Body className='d-flex flex-column gap-3'>
              <div className='d-flex align-items-center gap-4'>
                <p className='primary-color add-border rounded-pill px-2 py-1'>Uncategorized</p>
                <p>MARCH 14,2024</p>
              </div>
              <Card.Title className='border-bottom pb-3'>Best And Fastest Data Server Ever</Card.Title>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                  <img src="./../../src/assets/images/blogProfile1_1.webp" alt="" />
                  <div>
                    <h6>Kristin Watson</h6>
                    <p className='m-0'>Web Designer</p>
                  </div>
                </div>
                <TbArrowNarrowRight className='fs-1' />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <section className='home-footer my-5 p-5 d-flex flex-wrap justify-content-end align-items-center gap-5 row-gap-1 position-absolute'>
          <img src="./../../src/assets/images/ctaThumb.webp" alt="" className='d-none d-lg-block'/>
          <p className='fs-3 text-light mx-5'>Stay Connected With Cutting Edge IT</p>
          <button className='rounded-pill px-4 py-2 mx-5'>TALK TO A SPECIALIST <TbArrowNarrowRight /></button>
      </section>

    </section>
  )
}
