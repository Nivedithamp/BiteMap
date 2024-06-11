import React from 'react';
import './mainPage.css'; 
import Header from './header'; 
import Footer from './Footer'; 
import image from '../assets/image.png'; 

const MainPage = () => {
    return (
        <div>
            {/* Header component */}
            <Header />

            {/* Main content section */}
            <div className="content">
                {/* Welcome section */}
                <div className="welcome">
                    <h1>Welcome to BiteMap</h1>
                    <p>
                        Discover culinary delights in your favorite city with BiteMap. Whether you crave savory delights, sweet treats, or something in between, our platform is your gateway to a world of flavors.
                        Embark on a culinary journey through bustling streets and hidden gems. With our intuitive interface, finding your next dining adventure is as easy as a few clicks.
                        Join us on a gastronomic adventure like no other. Your next unforgettable dining experience awaits on BiteMap.
                    </p>
                </div>

                {/* Image section */}
                <div>
                    <img src={image} alt="Culinary delights" />
                </div>
            </div>

            {/* Services section */}
            <div className="services">
                <h2>Our Services</h2>
                <p>
                    At BiteMap, we cater to all your culinary preferences. Whether you are looking for vegan, Indian, Mexican, or Italian cuisine, we have got you covered. Find restaurants that suit your dietary needs and preferences at your favorite locations. Our services include:
                </p>
                <ul>
                    <li><strong>Vegan Delights:</strong> Discover a variety of vegan restaurants that offer delicious and cruelty-free meals.</li>
                    <li><strong>Indian Cuisine:</strong> Indulge in the rich and diverse flavors of Indian food, from spicy curries to savory snacks.</li>
                    <li><strong>Mexican Flavors:</strong> Satisfy your cravings with authentic Mexican dishes, including tacos, burritos, and more.</li>
                    <li><strong>Italian Specialties:</strong> Enjoy the best of Italian cuisine, from classic pizzas to exquisite pastas and so on.</li>
                </ul>
                <p>
                    For your convenience, we provide detailed addresses and contact information for each restaurant, ensuring you can easily find and visit your favorite places.
                </p>
            </div>

            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default MainPage;
