import React from 'react';
import Header from './Header';
import './specials.css'


const Specials = () => {
    return (
        <>
            <head>
                <title>WindowPros | Specials</title>
            </head>
            <body className='wave'>
                <div className='waveOutline'></div>

                <Header />
                <h1 className='slogan'>Limited-Time Offers: Don't Miss Out!</h1>
                <ul class="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </body>

        </>
    )
}

export default Specials