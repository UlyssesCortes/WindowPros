import React from 'react';
import Header from './Header';
import Spline from '@splinetool/react-spline';
import './contact.css'

const ContactUs = () => {
    return (
        <>
            <body className='wave'>
                <div className='waveOutline'></div>
                <Header />
                <h1 className='slogan'>Get in Touch with Us</h1>

                <div className='contactFormSec'>
                    <div className='avatar'>
                        <Spline scene="https://prod.spline.design/wpLwgZHZEi4N2iWv/scene.splinecode" />
                    </div>
                    <form className='formSec'>
                        <section>
                            <input placeholder='Name'></input>
                            <input placeholder='Email'></input>
                        </section>
                        <input placeholder='Subject'></input>
                        <input placeholder='Message'></input>
                    </form>
                </div>

            </body>

        </>
    )
}

export default ContactUs