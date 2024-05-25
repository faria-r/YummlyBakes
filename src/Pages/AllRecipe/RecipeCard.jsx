import React from 'react';
import Button from '../../Components/Button/Button';

const RecipeCard = ({item}) => {
    const  {name, photo,country,authorEmail,purchased_by,_id} = item;
    return (
        <div className='shadow-xl w-80 px-4 font-mono'>
            <div>
                <img className='w-full h-48 object-cover' src={photo} alt="" />
            </div>
            <div>
                <h2 className='font-semibold'>{name}</h2>
                <h2>Country: {country}</h2>
                <h2>Posted By: {authorEmail}</h2>
                <h2>{purchased_by}</h2>

            </div>
            <div className='my-4 w-[99%] mx-auto text-center'>
                <Button value={'View The Recipe'}></Button>
            </div>
        </div>
    );
};

export default RecipeCard;