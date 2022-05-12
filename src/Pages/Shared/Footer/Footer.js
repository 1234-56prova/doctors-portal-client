import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer back-g-img  p-10 text-base-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a href='/' class="link link-hover">Emergency checkup</a>
                    <a href='/' class="link link-hover">Monthly checkup</a>
                    <a href='/' class="link link-hover">Weekly checkup</a>
                    <a href='/' class="link link-hover">Deep checkup</a>
                </div>
                <div>
                    <span class="footer-title">Oral Health</span>
                    <a href='/' class="link link-hover">Flouride Treatment</a>
                    <a href='/' class="link link-hover">Cavity Filling</a>
                    <a href='/' class="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span class="footer-title">Our Address</span>
                    <a href='/' class="link link-hover">New York-101010 Hudson</a>
                </div>
            </footer>
            <footer>
                Copyrights reserved
            </footer>
        </div>
    );
};

export default Footer;