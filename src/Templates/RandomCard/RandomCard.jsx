import React, { useEffect, useState } from 'react';

const RandomCard = () => {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const photoResponse = await fetch('https://api.example.com/photos/random');
      const photoData = await photoResponse.json();
      setPhoto(photoData.url);

      const quoteResponse = await fetch('https://api.example.com/quotes/random');
      const quoteData = await quoteResponse.json();
      setQuote(quoteData.text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="card">
      <img src={photo} alt="Random" />
      <p>{quote}</p>
    </div>
  );
};

export default RandomCard;
