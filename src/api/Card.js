import React, { useEffect, useState } from "react";
import product7 from "../assets/images/shop/product7.jpg";
const Card = () => {
  const [photo, setPhoto] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const photo = product7;
      setPhoto(product7);

      const quoteResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const quoteData = await quoteResponse.json();
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="card">
      <img src={photo} alt="Random" />
      <p>{quote}</p>
    </div>
  );
};

export default Card;
