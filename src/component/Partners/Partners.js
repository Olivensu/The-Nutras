import React from 'react';
import './Partners.css';
import img1 from '../../img/brand/brand-2-1.webp'
import img2 from '../../img/brand/brand-2-2.webp'
import img3 from '../../img/brand/brand-2-3.webp'
import img4 from '../../img/brand/brand-2-4.webp'
import img5 from '../../img/brand/brand-2-5.webp'

const Partners = () => {
    return (
        <div className='partners'>
            <p className='text-success fw-bold m-3'>WORK WITH TRUSTED BRAND</p>
            <h1 className='m-3'>We Have 8,00+ Trusted Partners.</h1>
            <h5 className='text-danger fw-bold m-3'>Printing and typesetting standard dummy text ever since</h5>
            <div className='my-5'>
                <img className='m-3' src={img1} alt="" />
                <img className='m-3' src={img2} alt="" />
                <img className='m-3' src={img3} alt="" />
                <img className='m-3' src={img4} alt="" />
                <img className='m-3' src={img5} alt="" />
            </div>
        </div>
    );
};

export default Partners;