import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <div className="container notFound-container text-center py-32">
        <h2 className='font-semibold'>Page Not Found</h2>
        <Link to="/" className='btn mt-8 inline-block'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound