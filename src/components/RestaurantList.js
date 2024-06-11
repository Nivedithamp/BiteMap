import React from 'react';
import './RestaurantList.css'; 

function RestaurantList({ data }) {
  // Check if there is no data or if the data array is empty
  if (!data || data.length === 0) {
    return <p>No restaurants found.</p>; 
  }

  // Render the list of restaurants if data is available
  return (
    <ul className="restaurant-list"> {/* Container for the list of restaurants */}
      {/* Map through each restaurant in the data array */}
      {data.map((restaurant, index) => (
        <li key={index} className="restaurant-item"> {/* Individual restaurant item */}
          <h3>{restaurant.name}</h3> 
          <p>{restaurant.address}</p> 
          <p>Type: {restaurant.type}</p> 
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
