import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <>
            <nav className='navHome'>
                <section className='navHeader'>
                    <h1 className=' titleHome whiteTittle'>WindowPros</h1>
                    <ul className='navListHome'>
                        <li><Link className='linksHome servicesLink' to='/'>Home</Link ></li>
                        <li><Link className='linksHome servicesLink servicesSelected' to='/Services'>Services</Link ></li>
                        {/* <li><Link className='links' to='/OurClients'>Our Clients</Link ></li> */}
                        <li><Link className='linksHome servicesLink specSelecter' to='/Specials'>Specials</Link ></li>
                        <li><Link className='linksHome servicesLink' to='/ContactUs contactSelected'>ContactUs</Link ></li>
                    </ul>
                </section>
                <section className='navButton'>
                    <ul className='navListHome'>
                        <li><Link className='linkBtn secStyleBtn'>Sign In</Link></li>
                        <li><Link className='linkBtn singUpBtn secStyleBtn secStyleBtnSignUp'>Sign Up Free</Link></li>
                    </ul>
                </section>
            </nav>
        </>
    )
}

export default Header