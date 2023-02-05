import React, { useState } from "react";

import Header from "./Header";
import './solar.css'

const Solar = () => {
    const [openForm, setOpenForm] = useState(false)
    const btnClicked = () => {
        setOpenForm(!openForm)
    }
    return (
        <>
            <head>
                <title>WindowPros | Specials-Solar</title>
            </head>
            <body>
                <div class="hero-image">
                    <Header />
                    <h1 className='slogan'>Bringing clarity to your energy efficiency!</h1>
                    <button onClick={() => btnClicked()} className='quoteBtnHome'>Get a quote now!</button>
                </div>
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
                <ul class="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </body>

        </>
    )
}

export default Solar