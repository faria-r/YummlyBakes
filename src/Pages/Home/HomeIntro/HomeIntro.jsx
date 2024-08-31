import React from 'react';
import fp from '../../../assets/frying-pan.gif'
import bg from'../../../assets/yummly/nj.jpg'
const HomeIntro = () => {
    return (
         <div  >
          {/* style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat'}} className='p-12  w-[90vw] mx-auto' */}
          <div className='w-[90vw] mx-auto my-16 p-6 text-center'>
          <h1 className='font-bold font-serif text-xl lg:text-4xl '>Discover New Dishes You Will Love</h1>  
        <h3 className='lg:w-[80%] mx-auto my-8 p-2  font-mono '>Recipe Community of Yummly Bake Helps You To Share & Discover The Recipies That Fit Your Eating Preferences, Restrictions, Needs & More....</h3>
        <p className='text-center'>
<img src={fp} className='w-28 bg-transparent mx-auto' />
        </p>
          </div>
        </div>
    );
};

export default HomeIntro;