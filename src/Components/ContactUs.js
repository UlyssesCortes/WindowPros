import React from 'react';
import Header from './Header';
import Spline from '@splinetool/react-spline';
import './contact.css'

const ContactUs = () => {

    return (
        <>
            <head>
                <title>WindowPros | ContactUs</title>
            </head>
            <body className='wave' >
                <div className='waveOutline'></div>
                <Header />
                <h1 className='slogan'>Get in Touch with Us</h1>
                <div className='contactFormSec'>
                    <div className='avatar'>
                        <Spline scene="https://prod.spline.design/wpLwgZHZEi4N2iWv/scene.splinecode" />
                        {/* <div className='AvatarLoadImg'></div> */}
                    </div>
                    <form className='formSec'>
                        <section className='topFormSec'>
                            <input className='nameInp' type="text" placeholder='Name'></input>
                            <input className='emailInp' type="text" placeholder='Email'></input>
                        </section>
                        <input className='subInp' type="text" placeholder='Subject'></input>
                        <input className='mesInp' type="text" placeholder='Message'></input>
                        <button className='sendBtn' type='submit'>SEND</button>
                    </form>
                </div>


            </body>

        </>
    )
}

export default ContactUs