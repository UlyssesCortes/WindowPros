import React, { useState } from "react";
import Header from "./Header";
// import { useScroll, animated } from '@react-spring/web'

import './solar.css'

const Solar = () => {
    const [openForm, setOpenForm] = useState(false)
    // const { scrollYProgress } = useScroll()

    const btnClicked = () => {
        setOpenForm(!openForm)
    }

    document.addEventListener('DOMContentLoaded', function () {
        window.onscroll = function () { myFunctionForSticky() }

        const navbar = document.getElementById("myHeader");
        const sticky = navbar.offsetTop;

        function myFunctionForSticky() {
            if (window.pageYOffset > sticky) {
                console.log(true)

                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    })



    return (
        <>
            <head>
                <title>WindowPros | Specials-Solar</title>
            </head>

            <body className="solarBody">

                <div class="hero-banner">
                    <div class="hero-banner__title" aria-hidden="true">WindowPros</div>
                    <img class="hero-banner__image" src="https://assets.freedommayer.com/codepen/mountains-dark.jpg" alt="img" />
                    <h1 class="hero-banner__title hero-banner__stroked-title">WindowPros</h1>
                </div>
                <div class="contents">

                    <div class="header" id="myHeader">
                        <Header />
                    </div>
                    {/* <animated.div style={{ opacity: scrollYProgress }}>
                        Hello World
                    </animated.div> */}
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>

                </div>
                <div class="contents">
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>
                    <p>sdfasdfsdf</p>

                </div>

                {/* <button onClick={() => btnClicked()} className='quoteBtnHome'>Get a quote now!</button> */}
                {/* </div> */}
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
                {/* <ul class="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}

            </body>

        </>
    )
}

export default Solar