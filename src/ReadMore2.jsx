import React, { useState } from 'react';

const ReadMore2 = ({ text, maxLength }) => {
  const [isCompleteText, setIsCompleteText] = useState(false);
  
  const toggleReadMore = () => {
    setIsCompleteText(!isCompleteText);
  }

  return (
    <div>
      {isCompleteText ? text : `${text.substring(0, maxLength)}`}
      {text.length > maxLength &&
        <button className='text-blue-600' onClick={toggleReadMore}>
          {isCompleteText ? 'Read Less' : 'Read More...'}
        </button>
      }
    </div>
  )
}

export default ReadMore2;