import React from 'react';

const Button = ({value}) => {
    return (
        <div>
            <button className='btn text-xl rounded-none text-white h-8 px-12 py-0 bg-gradient-to-r from-yellow-500 to-amber-600 border-none hover:from-amber-600 hover:to-yellow-500'>{value}</button>
        </div>
    );
};

export default Button;