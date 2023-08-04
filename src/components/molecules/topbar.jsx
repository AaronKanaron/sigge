import React from 'react';
// import "./index.scss";
import "./topbar.scss";
import { Link } from 'react-router-dom';
import ContactLink from '../atoms/contact-link';


const Topbar = () => {
        return(
            <div className="topbar-container">
                <div className="topbar">
                    <div className="left">
                        <h1>bruno bastian | portfolio</h1>
                        <i>2023</i>
                    </div>
                    <ul className="list">
                        <ContactLink to="/" text="Home"/>
                        <ContactLink to="/work" text="Work"/>
                        <ContactLink to="/work" text="Resume"/>
                        <ContactLink to="/work" text="Contact"/>
                    </ul>
                </div>
            </div>
        )
}

export default Topbar