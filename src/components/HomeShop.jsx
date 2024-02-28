import React from 'react'
import { shop } from './data'
import Shop from './Ui'
import { Link } from 'react-router-dom'

const HomeShop = () => {
  return (
    <section className='my-8'>
      <div className="container shop-container text-center">
        <h2 className='font-semibold text-4xl mb-16'>Shop from us</h2>

        <div className="shop-products grid grid-cols-2 gap-20 mb-12">
          {
            shop.map(({id, title, image, price, icon, desc}) => {
              return (
                <Shop key={id} image={image} price={price} desc={desc} title={title} icon={icon}/>
              )
            })
          }
        </div>
        <Link to={'/shop'} className='btn font-semibold inline-flex'>See More</Link>
      </div>
    </section>
  )
}

export default HomeShop