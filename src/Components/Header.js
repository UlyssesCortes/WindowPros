import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css'


const Header = () => {
    console.log("Header Loaded!")

    return (
        <>
            <nav className='navHome'>
                <section className='navHeader'>
                    <div className='icon'></div>
                    <h1 className=' whiteTittle'>WindowPros</h1>
                    <ul className='navListHome'>
                        <li>
                            <NavLink end className={({ isActive }) => isActive ? "activeLinks" : "nonActiveLinks"} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink end className={({ isActive }) => isActive ? "activeLinks" : "nonActiveLinks"} to='/Services'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink end className={({ isActive }) => isActive ? "activeLinks" : "nonActiveLinks"} to='/Specials'>Specials</NavLink>
                        </li>
                        <li>
                            <NavLink end className={({ isActive }) => isActive ? "activeLinks" : "nonActiveLinks"} to='/ContactUs'>ContactUs</NavLink>
                        </li>
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
                <a className='phoneLink' href="tel:+7606854653"><p className='myNum'>760-685-4653</p></a>
            </div>
        </>
    )
}

export default Header