import PropTypes from 'prop-types';
import React from 'react';

export default function MissionCard({ name, year, country, destination }) {
  return (
    <div
      className="mission-card-container"
      data-testid="mission-card"
    >
      <p
        className="mission-card-title"
        data-testid="mission-name"
      >
        {name}
      </p>
      <div className="mission-card-description">
        <p data-testid="mission-year">
          {year}
        </p>
        <p data-testid="mission-country">
          {country}
        </p>
        <p data-testid="mission-destination">
          {destination}
        </p>
      </div>
    </div>
  );
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
