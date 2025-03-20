import React from 'react';
import DestinationCard from './DestinationCard';
import GreeceImage from '../assets/GreeceImage.png';
import NorwayImage from '../assets/NorwayImage.png';
import ParisImage from '../assets/ParisImage.png';
import TuscanyImage from '../assets/TuscanyImage.png';

function PopularDestinations() {
  const destinations = [
    { name: 'Paris', price: 699, image: ParisImage },
    { name: 'Greece', price: 1079, image: GreeceImage },
    { name: 'Norway', price: 895, image: NorwayImage },
    { name: 'Tuscany', price: 1245, image: TuscanyImage },
  ];

  return (
    <section className="popular-destinations py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <p
              className="mb-1"
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#1262AF',
              }}
            >
              PLAN YOUR NEXT TRIP
            </p>
            <h2
              className="m-0"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#000',
              }}
            >
              Most Popular Destinations
            </h2>
          </div>
          <a
            href="#"
            className="text-primary"
            style={{
              fontSize: '1rem',
              color: '#1262AF',
            }}
          >
            View all destinations →
          </a>
        </div>
        <div
          className="row g-3"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0px',
          }}
        >
          {destinations.map((destination, index) => (
            <div className="col-md-3" key={index}>
              <DestinationCard
                name={destination.name}
                price={destination.price}
                image={destination.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;