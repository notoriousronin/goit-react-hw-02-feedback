import React from 'react';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
