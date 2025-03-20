import React from 'react';

function DestinationCard({ name, price, image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '288px',
        height: '182px', 
        borderRadius: '10px', 
        flex: 'none',
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        position: 'relative',
        color: '#fff',
        border: 'none !important',
        boxShadow: 'none !important',
      }}
    >
      <div
        className="p-3 d-flex justify-content-between align-items-start"
        style={{ background: 'rgba(0, 0, 0, 0.2)', height: '100%' }}
      >
        <h5
          className="mb-0"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
          }}
        >
          {name}
        </h5>
        <div className="text-end">
          <p
            className="mb-0"
            style={{
              fontSize: '0.75rem',
              color: '#fff',
            }}
          >
            FROM
          </p>
          <p
            className="mb-0"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;