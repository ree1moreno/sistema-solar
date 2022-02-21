import PropTypes from 'prop-types';
import React from 'react';
import Modal from './Modal';

export default function PlanetCard({ planetName, planetImage, planetGif }) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <div data-testid="planet-card">
        {
          isModalVisible ? (
            <Modal onClose={ () => setIsModalVisible(false) }>
              <img 
                src={planetGif}
                alt="animação do planeta"
                className="gif"
              />
            </Modal>
          ) : (
            <>
              <p
                className="planet-card-name"
                data-testid="planet-name"
              >
                {planetName}
              </p>
              <button
                type="button"
                onClick={ () => setIsModalVisible(true) }
              >
                <img
                  className="planet-card-image"
                  src={ planetImage }
                  alt={ `Planeta ${planetName}` }
                />
              </button>
            </>            
          )
        }
    </div>
  );
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
