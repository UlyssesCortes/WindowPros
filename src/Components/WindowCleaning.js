import React, { useState } from "react";
import Header from "./Header";

const Window = () => {
    const [openForm, setOpenForm] = useState(false)
    const btnClicked = () => {
        setOpenForm(!openForm)
    }
    return (
        <>
            <head>
                <title>WindowPros | Specials-WindowCleaning</title>
            </head>
            <body className='wave'>
                <div className='waveOutline'></div>

                <Header />
                <h1 className='slogan'>Bringing clarity to your windows!</h1>
                <ul class="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="blokBig">
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
            </body >

        </>
    )
}

export default Window