import React from 'react'
import image_1 from '../../Images/image-1.svg';
import image_2 from '../../Images/image-2.svg';
import image_3 from '../../Images/image-3.svg';
import image_4 from '../../Images/image-4.svg';
import image_5 from '../../Images/image-5.svg';

export const Features = () => {
  return (
    <div className="container p-6 flex flex-col items-center">
        <div className='features text-center my-8'>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-extrabold sm:leading-tight  text-black dark:text-white'>We Are A Web Design Agency</h1>
            <p className='md:my-10 leading-relaxed text-sm sm:text-base text-p-light dark:text-p-dark'>Interior Design Services</p>
        </div>
            <div className='grid grid-col md:grid-cols-2 gap-4'>
                <img className='image1' src={image_1} alt="" />
                <img className='image2' src={image_2} alt="" />
            </div>
            <div className="grid grid-col md:grid-cols-3 gap-4 mt-6">
                <img className='image3' src={image_3} alt="" />
                <img className='image4' src={image_4} alt="" />
                <img className='image5' src={image_5} alt="" />
            </div>
        </div>
  )
}
