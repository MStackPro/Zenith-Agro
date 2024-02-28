import React from 'react'
import ContactLogo from '../../assets/logo.png'
import FarmerImage from '../../assets/Farmer-with-a-carrot.png'

const Contact = () => {
  return (
    <section className='my-20'>
      <div className="contact-container container grid grid-cols-2 gap-8 pt-16">
        <div className="left-side relative">
          <img src={ContactLogo} alt="logo" className='absolute top-0 left-0 opacity-10' />
          <img src={FarmerImage} alt="farmer illustration" className='absolute top-80 left-20' />
        </div>

        <div className="form-section flex flex-col gap-8">
          <div className="heading text-center space-y-2 ">
            <h2 className='font-semibold'>Contact us</h2>
            <p>
              Send us a message to make your inquiry. We shall respond promptly.
            </p>
          </div>
          <form action="#" className='flex flex-col'>
            <label htmlFor="text">Full Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="tel">Phone Number</label>
            <input type="tel" name='tel' />

            <label htmlFor="text">Email Address</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="text">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <input type="button" value="Sumbit" className='btn mt-8' />
          </form>
          
        </div>
      </div>
    </section>
  )
}

export default Contact