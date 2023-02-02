import React, { useState } from 'react';
import Header from './Header';
import './services.css'

const Services = () => {

    const [isActive1, setIsActive1] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)

    const divClicked = (divClassName, setActiveNum1, setActiveNum2) => {
        let div = document.getElementsByClassName(divClassName);
        div.addEventListener("click",
            setActiveNum1(false),
            setActiveNum2(true)
        )
    }

    return (
        <>
            <head>
                <title>WindowPros | Services</title>
            </head>
            <body className='wave'>
                <div className='waveOutline'></div>
                <Header />
                <h1 className='slogan'>Expert Solutions for All Your Needs</h1>
                <ul class="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <section className="slideshow-container">
                    {isActive1 &&
                        <div className="mySlides fade">
                            <div className="numbertext">1 / 3</div>
                            <img src='https://www.w3schools.com/w3css/img_mountains_wide.jpg' alt='hello' style={{ width: "100%" }} />
                            <div className='nextBtn' onClick={() => {
                                divClicked("nextBtn", setIsActive1, setIsActive2)
                            }}>Next</div>
                        </div>
                    }
                    {isActive2 &&
                        <div className="mySlides fade">
                            <div className="numbertext">2 / 3</div>
                            <img src='https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80' alt='hello' style={{ width: "100%" }} />
                            <div className='nextBtn' onClick={() => {
                                divClicked("nextBtn", setIsActive2, setIsActive3)
                            }}>Next</div>
                        </div>
                    }

                    {isActive3 &&
                        <div className="mySlides fade">
                            <div className="numbertext">3 / 3</div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO57MdsRoynBqbS5XTOvevmbfToaanVQwo98xgbFbf5A&s' alt='hello' style={{ width: "100%" }} />
                            <div className='nextBtn' onClick={() => {
                                divClicked("nextBtn", setIsActive3, setIsActive1)
                            }}>Next</div>
                        </div>
                    }
                </section>
            </body>

        </>
    )
}

export default Services