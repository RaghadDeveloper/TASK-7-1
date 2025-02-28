import './Hero2.css'
import React from 'react'

export default function Hero2(pageName) {
  return (
    <section className='hero2'>
        <div className='bg-img d-flex flex-column justify-content-center align-items-center text-light position-relative'>
            <h1>{pageName.title}</h1>
            <p>Home &gt; {pageName.title}</p>
            <img src="./../../src/assets/images/line-element.webp" alt="" className='img1'/>
            <img src="./../../src/assets/images/element.webp" alt="" className='img2'/>
        </div>
    </section>
  )
}
