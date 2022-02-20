import PropTypes from 'prop-types';
import React from 'react';

export default function Title({ headline }) {
  return (
    <div className="main-title-container">
      <h2 className="main-title">{headline}</h2>
    </div>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
