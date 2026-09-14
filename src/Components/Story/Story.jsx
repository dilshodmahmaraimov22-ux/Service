import React from 'react'
import './Story.css'
import st1 from '../Images/St1.png'
import st2 from '../Images/St2.png'
import st3 from '../Images/St3.png'

const Story = () => {
  return (
    <>
    <div className='story'>
        <div className='container'>
            <div className='story-container'>
                <h1 className='story-title'>Real Stories from Real Customers</h1>
                <p className='story-text'>Get inspired by these stories.</p>
                <ul className='story-list'>
                    <li className='story-item'>
                        <img className='story-img' src={st1} alt="" />
                        <p className='story-text2'></p>
                        <h1 className='story-title2'></h1>
                        <p className='story-text3'></p>
                    </li>
                    <li className='story-item'>
                        <img className='story-img' src={st2} alt="" />
                        <p className='story-text2'></p>
                        <h1 className='story-title2'></h1>
                        <p className='story-text3'></p>
                    </li>
                    <li className='story-item'>
                        <img className='story-img' src={st3} alt="" />
                        <p className='story-text2'></p>
                        <h1 className='story-title2'></h1>
                        <p className='story-text3'></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Story