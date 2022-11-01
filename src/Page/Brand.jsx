import React from 'react';
import { useSelector } from 'react-redux';

const Brand = () => {
    const { Brand } = useSelector((state) => state)
    // const { MotoData } = useSelector((state) => state)


    return (
        <div className=' container'>
            <div className='row'>
                <h1 className='m-2'>{Brand}</h1>
            </div>


        </div>
    );
}

export default Brand;
