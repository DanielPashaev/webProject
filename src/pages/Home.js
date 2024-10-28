import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Reduce Food Waste, Share What You Can!</h1>
          <p>
            Join us in making the world a better place by donating or requesting
            food today.
          </p>
          <Link to="/listings" className="btn">
            Browse Listings
          </Link>
          <Link to="/CreateListing" className="btn create-listing-btn">
            Create Listing
          </Link>
        </div>
      </section>

      <div className="container">
        <h2>How It Works</h2>
        <div className="flex">
          <div>
            <h3>1. Donate</h3>
            <p>
              Create a listing of food items you wish to donate, and help reduce
              waste.
            </p>
          </div>
          <div>
            <h3>2. Request</h3>
            <p>
              Search for available food near you and request items that you
              need.
            </p>
          </div>
          <div>
            <h3>3. Pickup</h3>
            <p>
              Arrange for pickup or delivery of food and contribute to waste
              reduction!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
