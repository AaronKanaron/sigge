import React from 'react';
import { Link } from 'react-router-dom';


const ContactLink = ({ link, text }) => {
    return (
        <Link to={link}>
            <li className="contact">
                <p>{text}</p>
            </li>
        </Link>
    )
}

export default ContactLink;