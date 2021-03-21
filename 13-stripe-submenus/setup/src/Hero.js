import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section class='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infracstructure for the internet</h1>
          <p>
            Millions of compaines of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept paymnets, send payouts, and
            manage their bussiness online.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
