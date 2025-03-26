import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  // State to track if the text is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className='text-4xl'>
      {/* Display full text if expanded, otherwise display truncated text */}
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      {/* Show button only if text length exceeds maxLength */}
      {text.length > maxLength && (
        <button onClick={toggleReadMore} className="text-blue-500">
          {/* Button text changes based on expanded state */}
          {isExpanded ? ' Read Less' : ' Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
