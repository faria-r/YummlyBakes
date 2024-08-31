import React from 'react';
import pic0 from '../../../assets/yummly/rb.jpeg'
import pic1 from '../../../assets/yummly/eg.jpeg'
import pic2 from '../../../assets/yummly/po.jpg'
import pic3 from '../../../assets/yummly/hp.jpg'

const HowTo = () => {
    return (
        <div className='w-[75vw] mx-auto mt-24 mb-16 p-4 grid grid-cols-1 lg:grid-cols-6 gap-3 '>
            <div className='text-center col-span-2'>
               <p className='font-[roboto] italic'> Some Free Recipies For You</p>
               <h1 className='text-5xl font-semibold font-serif italic py-2'>how to :</h1>
               <h3 className='font-semibold'>MAKE</h3>
            </div>
            <div className='text-center'>
                <img src={pic1} className='w-[150px] h-[110px]' />
                <p>Baked Eggs</p>
            </div>
            <div className='text-center'>
                <img src={pic0} className='w-[150px] h-[110px]' />
                <p>Roasted Brokely</p>
            </div>
            <div className='text-center'>
                <img src={pic3} className='w-[150px] h-[110px]' />
                <p>Homemade Pasta</p>
            </div>
            <div className='text-center'>
                <img src={pic2} className='w-[150px] h-[110px]' />
                <p>Pickled Onion</p>
            </div>
        </div>
    );
};

export default HowTo;