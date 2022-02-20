import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="planet-card-area">
        {
          planets.map(({ name, image, gif }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
              planetGif={ gif }
            />
          ))
        }
      </div>
    </div>
  );
}
