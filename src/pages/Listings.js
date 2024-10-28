import React, { useEffect, useState } from "react";
import axios from "axios";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/listings")
      .then((response) => setListings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Available Food Listings</h2>
      <div className="listings-grid">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>
              Available Until:{" "}
              {new Date(listing.availableUntil).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
