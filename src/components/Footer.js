import React from 'react';
import './footer.css';
import { Helmet } from 'react-helmet';

const Footer = () => {
    // Function to handle form submission
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d0550f1b-d11e-421a-95fd-0e5140a0368b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            // Sending form data to the API endpoint
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            // Handling response
            if (res.ok) {
                const data = await res.json();
                alert(data.message);
                event.target.reset();
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <footer>
            <Helmet>
                {/* Schema markup for LocalBusiness */}
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "BiteMap",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Some Address",
                            "addressLocality": "Some City",
                            "addressRegion": "Some State",
                            "postalCode": "12345",
                            "addressCountry": "US"
                        },
                        "telephone": "0101010-2321455"
                    }
                `}</script>
            </Helmet>
            <div className="message" id="message">
                <h1>CONTACT</h1>
                <p>FIND US AT SOME ADDRESS AT SOME PLACE OR CALL US AT 0101010-2321455</p>
                <h2>RESERVE A TABLE, ASK FOR TODAY'S SPECIAL OR JUST SEND US A MESSAGE</h2>
                {/* Form for user message submission */}
                <form onSubmit={onSubmit} className="contact-right">
                    <input type="text" placeholder='NAME' name='name' />
                    <input type="email" placeholder='EMAIL' name='email' />
                    <input type="text" placeholder='HOW MANY PEOPLE' name='number' />
                    <textarea name="message" rows="9" placeholder='MESSAGE / SPECIAL REQUEST'></textarea>
                    <button type='submit' className="contact-submit">SEND MESSAGE</button>
                </form>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 BiteMap, All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <a href='#message'><p>Connect with us</p></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
