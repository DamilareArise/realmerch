import React, { useState } from "react";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value); // Notify parent of the rating change
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleRating(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "gold" : "gray"}
    className=" cursor-pointer"
    width="15"
    height="15"
    onClick={onClick}
  >
    <path d="M12 .587l3.668 7.429L23.5 9.75l-5.67 5.523L19.8 23.5 12 19.765 4.2 23.5l1.97-8.227L.5 9.75l7.832-1.734L12 .587z" />
  </svg>
);

export default StarRating;
