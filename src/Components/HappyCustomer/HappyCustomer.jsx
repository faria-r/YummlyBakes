import React from 'react';
import Customer from './Customer';

const HappyCustomer = () => {
    return (
        <div>
            <h2 className='w-max mx-auto border-x-[1px] px-4 border-orange-500 text-center font-mono font-bold text-2xl lg:text-5xl my-16'>Happy Customers</h2>
            <div className='w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8'>
            <Customer photo={"https://i.ibb.co/q7CBNmG/k.jpg"} name={'Leslie Maria'} review={'I love how easy it is to find new recipes on this site! The search function is super user-friendly and the variety is amazing.'}></Customer>
            <Customer photo={"https://i.ibb.co/0ZfFKn9/sg.jpg"} name={'Andria Sia'} review={'Im really impressed with the quality of the recipes. Every dish Ive tried so far has been a hit with my family'}></Customer>
            <Customer photo={"https://i.ibb.co/wKwyLw1/riezl-baker.jpg"} name={'Marry Lucy'} review={'I appreciate the detailed instructions and photos for each recipe. They make cooking new dishes less intimidating and more fun'}></Customer>
            <Customer photo={"https://i.ibb.co/9Hdpnp0/Riezl-Baker-headshot.jpg"} name={'Diana Flora'} review={'The community aspect of the website is fantastic. I enjoy reading and sharing tips with other cooking enthusiasts.'}></Customer>
            <Customer photo={"https://static.toiimg.com/thumb/imgsize-123456,msid-107264019,width-200,resizemode-4/107264019.jpg"} name={'Sultana'} review={'I love that the website offers personalized recipe recommendations. Its like having a personal chef who knows exactly what I like!'}></Customer>
            <Customer photo={"https://img.freepik.com/free-photo/smiling-blonde-business-woman-posing-with-crossed-arms_171337-6291.jpg"} name={'Sweety Alfred'} review={'Your website is my go-to for meal planning. The ingredient lists are always accurate, and the nutritional info is a great bonus'}></Customer>
        </div>
        </div>
    );
};

export default HappyCustomer;