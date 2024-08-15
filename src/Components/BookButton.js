import React from 'react';

const BookButton = ({ eventId }) => {
  const handleBooking = () => {
    alert(`Booking event with ID: ${eventId}`);
  };

  return (
    <button onClick={handleBooking}>
      Book Here
    </button>
  );
};

export default BookButton;
