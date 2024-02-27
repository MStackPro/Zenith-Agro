import React from 'react'
import OurBlogImage1 from '../assets/blog1.png'
import OurBlogImage2 from '../assets/blog2.png'
import OurBlogImage3 from '../assets/blog3.png'
import { Link } from 'react-router-dom'


const OurBlog = () => {
  return (
    <section className='my-16 bg-gray-200'>
      <div className="container our-blog-container text-center py-12 space-y-12">
        <h2 className='font-semibold text-4xl mb-2'>Recent Blog Posts</h2>
        <span className='text-x tracking-wide text-ColorDark italic'>Find our thoughts written all over our blog</span>

        <div className="our-blogs grid grid-cols-3 gap-12">

          <div className="our-blog flex flex-col space-y-2 text-start">
            <img src={OurBlogImage1} alt="blog image" />
            <small className='text-ColorPrimary'>Farming</small>
            <p>
              4 Important things to do while Farming at Night
            </p>
            <small className='text-ColorDark'>25<sup>th</sup> Oct., 2024</small>
          </div>

          <div className="our-blog flex flex-col space-y-2 text-start">
            <img src={OurBlogImage2} alt="blog image" />
            <small className='text-ColorPrimary'>Farming</small>
            <p>
              10 Benefits of Organic Farming
            </p>
            <small className='text-ColorDark'>2<sup>nd</sup> Nov., 2024</small>
          </div>

          <div className="our-blog flex flex-col space-y-2 text-start">
            <img src={OurBlogImage3} alt="blog image" />
            <small className='text-ColorPrimary'>Farming</small>
            <p>
              Soya Bean or Maize Farming?
            </p>
            <small className='text-ColorDark'>25<sup>th</sup> Oct., 2024</small>
          </div>
        </div>

        <Link to={'/blog'} className='btn font-semibold inline-flex'>More Blog Posts</Link>
      </div>
    </section>
  )
}

export default OurBlog