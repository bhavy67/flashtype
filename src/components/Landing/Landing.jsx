import React from 'react';
import './Landing.css';
import flash from "./../../assets/flash.png";
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-con">
                <Typewriter
                    options={{
                    strings: ['Fast', 'Quick?', 'Correct?'],
                    autoStart: true,
                    loop: true,
                            }}
                />
                </div>
            </div>
            <div className="landing-right">
                <img
                    data-aos="fade-left"
                    src={flash}
                    className="flash-image"
                    alt="hero"
                />
            </div>
        </div>
    );
}

export default Landing;
