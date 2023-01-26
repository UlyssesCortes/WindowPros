import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './specials.css'


const Specials = () => {
    return (
        <>
            <body className='wave'>
                <div className='waveOutline'></div>

                <Header />
                <h1 className='slogan'>Limited-Time Offers: Don't Miss Out!</h1>
            </body>

        </>
    )
}

export default Specials