
import React, { useEffect, useState } from 'react';

function Rating({ eventId, userId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {

    const fetchRating = async () => {
      try {
        const response = await fetch(`http://localhost:8002/ratings?user=${userId}&eventId=${eventId}`);
        const data = await response.json();

    if (data.length > 0) {
      setRating(data[0].rating);
      localStorage.setItem(`userRating_${eventId}`, JSON.stringify(data[0])); 
    }
  } catch (error) {
    console.error('Error fetching rating:', error);
  }
};

fetchRating();
  }, [userId, eventId]);

  const handleRating = async (star) => {
    setRating(star);

const updatedRating = {
  user: userId,
  eventId: eventId,
  rating: star,
};


try {
  const response = await fetch(`https://5-delta.vercel.app/ratings?user=${userId}eventId=${eventId}`);
  const data = await response.json();

  if (data.length > 0) {
    // Update existing rating
    await fetch(`https://5-delta.vercel.app/ratings/${data[0].id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRating),
    });
  } else {
    // Create a new rating entry
    await fetch(`https://5-delta.vercel.app/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRating),
    });
  }

  // Optionally update localStorage
  localStorage.setItem(`userRating_${eventId}`, JSON.stringify(updatedRating));
} catch (error) {
  console.error('Error updating rating:', error);
}
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className='star'
          style={{
            cursor: 'pointer',
            color: rating >= star ? 'gold' : 'gray',
            fontSize: '35px',
          }}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
