import './Hero2.css'
import React from 'react'
import img1 from '../../assets/images/line-element.webp'
import img2 from '../../assets/images/element.webp'

export default function Hero2(pageName) {
  return (
    <section className='hero2'>
        <div className='bg-img d-flex flex-column justify-content-center align-items-center text-light position-relative'>
            <h1>{pageName.title}</h1>
            <p>Home &gt; {pageName.title}</p>
            <img src={img1} alt="" className='img1'/>
            <img src={img2} alt="" className='img2'/>
        </div>
    </section>
  )
}
