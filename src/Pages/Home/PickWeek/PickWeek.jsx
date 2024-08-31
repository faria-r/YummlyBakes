import React from 'react';
import img from '../../../assets/yummly/apple.png'
import Button from '../../../Components/Button/Button';
const PickWeek = () => {
    return (
        <div>
            <div className=" p-6 mt-24 lg:w-[90vw] mx-auto lg:flex justify-center">
            <div className='lg:w-[50%] bg-orange-50 p-6 text-center pt-24'>
<h2 className='font-mono text-2xl'>PICK OF THE WEEK</h2>
<h1 className='font-[roboto]  font-bold lg:text-5xl py-6'>Apple Pie Overnight Oats</h1>
<p className='my-2 mb-8'>Apple pie overnight oats are ever-so-slightly more complicated than our other overnight oat recipes (the simple dump-and-stir kind). But the little extra step of cooking the apples is so worth it. You’ll be thanking yourself in the morning!</p>

<Button value={'Get Free Recipe'}></Button>
            </div>
            <div className='lg:w-[50%]'>
<img src={img} className="w-full" />
            </div>
        </div>
        </div>
    );
};

export default PickWeek;