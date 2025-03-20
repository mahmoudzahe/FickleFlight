import React from 'react';

function HolidayCard({ name, duration, price, image }) {
  return (
    <div
      style={{
        border: 'none !important',
        boxShadow: 'none !important',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '288px',
          height: '242px',
          borderRadius: '10px 10px 0px 0px', 
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
          objectFit: 'cover', 
          border: 'none !important',
          boxShadow: 'none !important',
        }}
      />
      <div
        className="p-0 pt-2"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          width: '256px',
          height: '45px',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
        }}
      >
        <div style={{ flex: 1 }}>
          <h5
            style={{
              fontSize: '1.125rem',
              fontWeight: 800,
              color: '#000',
              marginBottom: 0,
            }}
          >
            {name}
          </h5>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#6C757D',
              marginBottom: 0,
              marginTop: '0px',
            }}
          >
            {duration}
          </p>
        </div>
        <p
          style={{
            fontFamily: "'Baloo Bhai', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '32px',
            textAlign: 'right',
            color: '#1262AF',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          ${price}
        </p>
      </div>
    </div>
  );
}

export default HolidayCard;