import React from 'react';
import './footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>

            <div className="footer-content">
                <div className='footer-content-left'>
                    <p className="footer-tagline"> Making Childhood Magical, One Toy at a Time</p>
                    <p className="footer-description">
                        Welcome to ToyStore - your ultimate destination for premium, safe, and 
                        educational toys that spark imagination and create lasting memories. 
                        From classic wooden blocks to high-tech interactive gadgets, we curate 
                        the finest toys for children of all ages.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                        <img src={assets.instagram_icon} alt="Instagram" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2> Quick Links</h2>
                    <ul>
                        <li> Home</li>
                        <li> About Us</li>
                        <li> Delivery Info</li>
                        <li> Privacy Policy</li>
                        <li> Gift Cards</li>
                        <li> Blog</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li> +1 (800) 123-4567</li>
                        <li> hello@toystore.com</li>
                        <li> 123 Toy Street, NYC 10001</li>
                        <li> Mon-Sat: 9AM - 8PM</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                 Copyright 2024 © ToyStore.com - Where Dreams Come to Play 
            </p>
        </div>
    )
}

export default Footer