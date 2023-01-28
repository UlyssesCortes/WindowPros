import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'




const Home = () => {
    return (
        <>
            <body>
                <nav className='navHome'>
                    <section className='navHeader'>
                        <div className='orangeTool'></div>
                        <h1 className=' titleHome'>WindowPros</h1>
                        <ul className='navListHome'>
                            <li><Link className='linksHome homeLInk' to='/'>Home</Link ></li>
                            <li><Link className='linksHome' to='/Services'>Services</Link ></li>
                            <li><Link className='linksHome' to='/Specials'>Specials</Link ></li>
                            <li><Link className='linksHome' to='/ContactUs'>ContactUs</Link ></li>
                        </ul>
                    </section>
                    <section className='navButton'>
                        <ul className='navListHome'>
                            <li><Link className='linkBtn'>Sign In</Link></li>
                            <li><Link className='linkBtn singUpBtn'>Sign Up Free</Link></li>
                        </ul>
                    </section>
                </nav>
                <div className='numContainer'>
                    <a className='phoneLink' href="tel:+1234567890"><p className='myNum'>760-685-4653</p></a>
                </div>

            </body>


        </>
    )
}

export default Home