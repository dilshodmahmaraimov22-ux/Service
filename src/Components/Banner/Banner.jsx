import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner-card'>
          {/* Uchburchak bezaklar */}
          <span className='shape shape-top'></span>
          <span className='shape shape-left'></span>
          <span className='shape shape-right'></span>

          <h1 className='banner-title'>
            We're here to make your <br /> website awesome.
          </h1>

          <button className='banner-btn'>
            <svg
              className='banner-icon'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='18'
              height='18'
            >
              <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z' />
            </svg>
            Get in touch with us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner