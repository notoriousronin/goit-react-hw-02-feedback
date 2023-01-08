import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option, index) => (
        <button
          style={{
            color: 'navy',

            marginRight: '5px',
          }}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
