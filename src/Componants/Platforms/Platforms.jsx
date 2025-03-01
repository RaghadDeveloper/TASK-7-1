import React from 'react'
import './Platforms.css'
import img1 from '../../assets/images/brandLogo1_1.svg'
import img2 from '../../assets/images/brandLogo1_2.svg'
import img3 from '../../assets/images/brandLogo1_3.svg'
import img4 from '../../assets/images/brandLogo1_4.svg'
import img5 from '../../assets/images/brandLogo1_5.svg'

export default function Platforms() {
  return (
    <section className='brand border-bottom my-5 p-5 d-flex flex-wrap justify-content-center gap-5 '>
        <img src={img1} alt="brandLogo1" width={'190px'} />
        <img src={img2} alt="brandLogo2" width={'190px'} />
        <img className='drop-box' src={img3} alt="brandLogo3" width={'190px'} />
        <img src={img4} alt="brandLogo4" width={'190px'} />
        <img src={img5} alt="brandLogo5" width={'190px'} />
    </section>
  )
}
