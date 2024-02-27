import React from 'react'

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <main className='hero-container flex flex-col justify-center items-center absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-ColorPrimary text-8xl font-bold'>Zenith</h1>
        <h6 className='text-5xl font-thin tracking-wider'>agro-allied</h6>
        <h3 className='text-4xl font-semibold '>Cooperative</h3>
        <span className='tracking-wider text-2xl'>s o c i e t y</span>
        <button className='btn mt-8 font-semibold'>Join Us</button>
      </main>
    </section>
  )
}

export default Hero