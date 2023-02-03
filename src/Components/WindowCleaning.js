import React from "react";
import Header from "./Header";

const Window = () => {
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

                </div>

                <section className="modalSection">
                    <a href="#modal-opened" class="link-1" id="modal-closed">Open Modal</a>
                    <div class="containerModal" id="modal-opened">
                        <div class="modal">

                            <div class="details">
                                <h1 class="title">Your Title</h1>
                                <p class="description">Slogan will be here at this place.</p>
                            </div>

                            <p class="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                            <button class="btnModal">Button &rarr;</button>

                            <a href="#modal-closed" class="link-2"></a>
                        </div>
                    </div>
                </section>
            </body >

        </>
    )
}

export default Window