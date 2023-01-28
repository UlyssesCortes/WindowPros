import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <>
            <nav className='navHome'>
                <section className='navHeader'>
                    <h1 className=' whiteTittle'>WindowPros</h1>
                    <ul className='navListHome'>
                        <li><Link className=' links' to='/'>Home</Link ></li>
                        <li><Link className=' links' to='/Services'>Services</Link ></li>
                        <li><Link className=' links ' to='/Specials'>Specials</Link ></li>
                        <li><Link className=' links ' to='/ContactUs'>ContactUs</Link ></li>
                    </ul>
                </section>
                <section className='navButton'>
                    <ul className='navListHome'>
                        <li><Link className='signBtn '>Sign In</Link></li>
                        <li><Link className='singUpB'>Sign Up Free</Link></li>
                    </ul>
                </section>
            </nav>
            <div className='numContainer'>
                <a className='phoneLink' href="tel:+1234567890"><p className='myNum'>760-685-4653</p></a>

            </div>
        </>
    )
}

export default Header