import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <>
            <nav className='nav'>
                <h1 className='title'>WindowPros</h1>
                <ul className='navList'>
                    <li><Link className='links' to='/'>Home</Link ></li>
                    <li><Link className='links' to='/Services'>Services</Link ></li>
                    <li><Link className='links' to='/OurClients'>Our Clients</Link ></li>
                    <li><Link className='links' to='/Specials'>Specials</Link ></li>
                    <li><Link className='links' to='/ContactUs'>ContactUs</Link ></li>
                </ul>
            </nav>

        </>
    )
}

export default Header