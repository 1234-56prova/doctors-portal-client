import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer back-g-img  p-10 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Emergency checkup</a>
                    <a href='/' className="link link-hover">Monthly checkup</a>
                    <a href='/' className="link link-hover">Weekly checkup</a>
                    <a href='/' className="link link-hover">Deep checkup</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a href='/' className="link link-hover">Flouride Treatment</a>
                    <a href='/' className="link link-hover">Cavity Filling</a>
                    <a href='/' className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a href='/' className="link link-hover">New York-101010 Hudson</a>
                </div>
            </footer>
            <footer>
                Copyrights reserved
            </footer>
        </div>
    );
};

export default Footer;