import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <>
            <nav className='navHome'>
                <section className='navHeader'>
                    <h1 className=' titleHome'>WindowPros</h1>
                    <ul className='navListHome'>
                        <li><Link className='linksHome homeLInk' to='/'>Home</Link ></li>
                        <li><Link className='linksHome' to='/Services'>Services</Link ></li>
                        {/* <li><Link className='links' to='/OurClients'>Our Clients</Link ></li> */}
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
        </>
    )
}

export default Header