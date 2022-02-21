import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

export default function Missions() {
  return (
    <div className="missions" data-testid="missions">
      <Title headline="Missões" />
      <div className="mission-card-area">
        {
          missions.map(({ name, year, country, destination, link }, index) => (
            <a
              key={ index }
              href={link}
              target="_blank"
            >
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </a>
          ))
        }
      </div>
    </div>
  );
}
