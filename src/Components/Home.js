import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.css'
// import Spline from '@splinetool/react-spline';

const Home = () => {
    const [openForm, setOpenForm] = useState(false)
    const btnClicked = () => {
        setOpenForm(!openForm)
        console.log(!openForm)
    }

    return (
        <>
            <head>
                <title>WindowPros</title>
            </head>
            <body>
                <nav className='navHome'>
                    <section className='navHeader'>
                        <div className='orangeTool'></div>
                        <h1 className=' titleHome'>WindowPros</h1>
                        <ul className='navListHome'>
                            <li><Link id="homeLink" to='/'>Home</Link ></li>
                            <li id='iconSec'>
                                <NavLink end className={"linksHome servLink"} to='/Services'>Services<div className='arrowIcon'></div></NavLink>
                                <div class="serviceDropDown homeDrop">
                                    <NavLink end className={"linksHome drpoLinkHome"} to='/WindowCleaning'>WindowCleaning</NavLink>
                                    <NavLink end className={"linksHome drpoLinkHome"} to='/Solar'>Solar Panel Cleaning</NavLink>
                                    <NavLink end className={"linksHome drpoLinkHome"} to='/Christmas'>Christmas Light Setup</NavLink>
                                </div>
                            </li>
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
                        <p className='homeSlogan '>Experience the Sparkle of Clean Windows!</p>
                        <article>
                            <p className='introductionPar'>We provide top-notch window cleaning with a focus on exceptional customer service and punctuality. Let us bring clarity to your view with our reliable and professional approach.</p>
                            <button onClick={() => btnClicked()} className='quoteBtnHome'>Get a quote now!</button>
                        </article>
                    </section>
                    <section id='avatarContainer'>
                        <div className='test'>
                            <div className='avatarImg'></div>
                        </div>
                    </section>
                </section>

                {openForm &&
                    <div class="containerModal" id="modal-opened">
                        <div class="modal">

                            <div class="details">
                                <h1 class="title">Get your quote</h1>
                                <p class="description">Get an Accurate Quote, Quick and Easy!</p>
                            </div>

                            <p class="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                            <button class="btnModal">Button &rarr;</button>

                            <button onClick={() => btnClicked()} class="link-2"></button>
                        </div>
                    </div>
                }


            </body >


        </>
    )
}

export default Home