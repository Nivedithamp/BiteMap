import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Helmet } from 'react-helmet'; 
import restaurants from '../data/restaurants.json'; 
import RestaurantList from '../components/RestaurantList';
import './CityStatePage.css'; 
import Header from '../components/header'; 
import Footer from '../components/Footer'; 

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CityStatePage() {
  const { city, state } = useParams(); // Extracting city and state parameters from URL
  const navigate = useNavigate(); // Initializing navigate function from react-router-dom
  const restaurantData = restaurants[city] ? restaurants[city][state] : []; // Getting restaurant data for the specified city and state

  // Function to handle back button click
  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className="city-state-page">
      <Helmet> {/* Managing document head tags */}
        <title>Restaurants in {capitalizeFirstLetter(city)}, {state.toUpperCase()}</title> {/* Setting page title */}
        <meta name="description" content={`Find the best restaurants in ${city}, ${state.toUpperCase()}.`} /> {/* Setting meta description */}
        <meta name="keywords" content={`${city} restaurants, ${state} restaurants, dietary preferences`} /> {/* Setting meta keywords */}
      </Helmet>

      <Header /> 
            
      <h2>Restaurants in {capitalizeFirstLetter(city)}, {state.toUpperCase()}</h2> 
      <RestaurantList data={restaurantData} /> {/* Render RestaurantList component with restaurant data */}

      <div className="back"> 
        <button onClick={handleBackClick} className="back-button">Back to Main Page</button> 
      </div>

      <Footer /> 
    </div>
  );
}

export default CityStatePage; 
