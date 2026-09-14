import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className='container'>
            <div className='hero-container'>
                <ul className='hero-list'>
                    <li className='hero-item'>
                        <a className='hero-link' href="#">Hosting</a>
                        <a className='hero-link' href="#">Domain</a>
                        <a className='hero-link' href="#">SEO </a>
                        <a className='hero-link' href="#">Email</a>
                    </li>
                    <li className='hero-item2'>
                        <h1 className='hero-title'>Premium Web Hosting for Your Website</h1>
                        <p className='hero-text'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                        <button className='hero-btn'>Create an Account</button>
                        <button className='hero-btn'>Choose your plan</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero