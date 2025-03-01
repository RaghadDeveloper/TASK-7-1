import './Blog.css'
import React from 'react'
import { TbArrowNarrowRight } from "react-icons/tb";
import LeftTitle from '../LeftTitle/LeftTitle';
import BlogCard from '../BlogCard/BlogCard';
import img1 from '../../assets/images/blogThumb1_2.webp'
import img2 from '../../assets/images/blogThumb1_3.webp'
import img3 from '../../assets/images/blogThumb1_1.webp'
import img from '../../assets/images/ctaThumb.webp'

export default function Blog() {

  const data = [
    {
      'img': img1,
      'date':'MARCH 14,2024',
      'title':'Best And Fastest Data Server Ever',
      'profileImg':'./../../src/assets/images/blogProfile1_2.webp',
      'name':'Kristin Watson',
      'desc':'Web Designer'
    },
    {
      'img': img2,
      'date':'MARCH 14,2024',
      'title':'Best And Fastest Data Server Ever',
      'profileImg':'./../../src/assets/images/blogProfile1_3.webp',
      'name':'Kristin Watson',
      'desc':'Web Designer'
    },
    {
      'img': img3,
      'date':'MARCH 14,2024',
      'title':'Best And Fastest Data Server Ever',
      'profileImg':'./../../src/assets/images/blogProfile1_1.webp',
      'name':'Kristin Watson',
      'desc':'Web Designer'
    }
  ]
  return (
    <section className='py-5 position-relative'>
      <LeftTitle title = {'BLOG & NEWS'} text = {'Featured News And Insights'} />

      <div className='container my-5 d-flex flex-wrap justify-content-center gap-5'>
        
        {
          data.map((item, index) => (
            <BlogCard img={item.img} date={item.date} title={item.title} profileImg={item.profileImg} name={item.name} desc={item.desc} />
          ))
        }

      </div>

      <section className='home-footer my-5 p-5 d-flex flex-wrap justify-content-end align-items-center gap-5 row-gap-1 position-absolute'>
          <img src={img} alt="" className='d-none d-lg-block'/>
          <p className='fs-3 text-light mx-5'>Stay Connected With Cutting Edge IT</p>
          <button className='rounded-pill px-4 py-2 mx-5'>TALK TO A SPECIALIST <TbArrowNarrowRight /></button>
      </section>

    </section>
  )
}
