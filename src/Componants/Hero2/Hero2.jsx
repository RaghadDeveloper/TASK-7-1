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
        <div className={(pageName.name=="about")? 'my-5 mx-4 d-flex flex-wrap justify-content-center gap-5' :'d-none'}>
            <div className='d-flex align-items-center gap-4' style={{width: ''}}>
                <img src="./../../src/assets/images/asterisk.svg" alt="" />
                <p className='m-0 fs-1 fw-bold'>Cyber Security </p>
                <img src="./../../src/assets/images/asterisk.svg" alt="" className='d-block d-lg-none'/>
            </div>
            <div className='d-lg-flex d-none align-items-center gap-4' style={{width: ''}}>
                <img src="./../../src/assets/images/asterisk.svg" alt="" />
                <p className='m-0 fs-1 fw-bold'>IT Solution </p>
            </div>
            <div className='d-lg-flex d-none align-items-center gap-4' style={{width: ''}}>
                <img src="./../../src/assets/images/asterisk.svg" alt="" />
                <p className='m-0 fs-1 fw-bold'>Twchnology </p>
            </div>
            <div className='d-lg-flex d-none align-items-center gap-4' style={{width: ''}}>
                <img src="./../../src/assets/images/asterisk.svg" alt="" />
                <p className='m-0 fs-1 fw-bold'>Data Security </p>
            </div>
        </div>
    </section>
  )
}
