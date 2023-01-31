import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
// import Spline from '@splinetool/react-spline';

const Home = () => {
    return (
        <>
            <body>
                <nav className='navHome'>
                    <section className='navHeader'>
                        <div className='orangeTool'></div>
                        <h1 className=' titleHome'>WindowPros</h1>
                        <ul className='navListHome'>
                            <li><Link id="homeLink" to='/'>Home</Link ></li>
                            <li><Link className='linksHome' to='/Services'>Services</Link ></li>
                            <li><Link className='linksHome' to='/Specials'>Specials</Link ></li>
                            <li><Link className='linksHome' to='/ContactUs'>ContactUs</Link ></li>
                        </ul>
                    </section>
                    <section className='navButton'>
                        <ul className='navListHome'>
                            <li><Link className='linkBtn signInBtn'>Sign In</Link></li>
                            <li><Link className='linkBtn singUpBtn'>Sign Up Free</Link></li>
                        </ul>
                    </section>
                </nav>
                <div className='numContainer'>
                    <a className='phoneLink' href="tel:+7606854653"><p className='myNum'>760-685-4653</p></a>
                </div>
                {/* <div className='blob'></div> */}
                {/* <div className='whiteBox'></div> */}
                {/* <div className='room'>
                    <Spline scene="https://prod.spline.design/4tLOGQCh7rb6PG4C/scene.splinecode" />
                </div> */}
                <ul class="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <section className='mainContainer'>
                    <section className='titleAndSlogan '>
                        <p className='homeSlogan highlight-container '>See the World Clearly with Clean Windows!</p>
                        <article>
                            <p className='introductionPar realistic-marker-highlight'>We provide top-notch window cleaning with a focus on exceptional customer service and punctuality. Let us bring clarity to your view with our reliable and professional approach.</p>
                            <button className='quoteBtnHome'>Get a quote now!</button>
                        </article>
                    </section>

                    <div className='test'></div>
                </section>

            </body>


        </>
    )
}

export default Home