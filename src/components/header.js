import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { Helmet } from 'react-helmet';

const Header = () => {
    // State for selected city
    const [selectedCity, setSelectedCity] = useState('');
    const navigate = useNavigate();

    // Function to handle city selection and navigation
    const handleCitySelection = () => {
        if (selectedCity) {
            // Extract city and state from selectedCity
            const [city, state] = selectedCity.split(',');
            // Navigate to the selected city page
            navigate(`/${city}/${state}`);
        } else {
            alert("Please select a city.");
        }
    };

    return (
        <header className="App-header">
            {/* Helmet for managing document head */}
            <Helmet>
                <title>Welcome to BiteMap - Your Guide to Dietary-Friendly Restaurants</title>
                <meta name="description" content="Find the best vegan, vegetarian, gluten-free, and other dietary-friendly restaurants near you with BiteMap." />
                <meta name="keywords" content="dietary-friendly restaurants, vegan, vegetarian, gluten-free, BiteMap" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
            </Helmet>
            {/* Logo */}
            <div>
                <h1><span>B</span>iteMa<span>p</span></h1>
            </div>
            {/* City selection and search button */}
            <div className="header-right">
                <p>Find restaurants at your favorite place</p>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">Select City</option>
                    <option value="new-york,ny">New York, NY</option>
                    <option value="los-angeles,ca">Los Angeles, CA</option>
                    <option value="san-francisco,ca">San Francisco, CA</option>
                    <option value="chicago,il">Chicago, IL</option>
                    <option value="miami,fl">Miami, FL</option>
                </select>
                <button onClick={handleCitySelection}>Search</button>
            </div>
        </header>
    );
};

export default Header;
