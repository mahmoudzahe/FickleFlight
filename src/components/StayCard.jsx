import React from 'react';

function StayCard({ name, rating, price, reviews, image }) {
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
          width: '270px',
          height: '200px',
          borderRadius: '10px', 
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
          objectFit: 'cover', 
          border: 'none !important',
          boxShadow: 'none !important',
        }}
      />
      <div className="p-0 pt-2">
        <h5 className="mb-1">{name}</h5>
        <p className="text-muted mb-1">${price}/night</p>
        <p className="mb-3">
          <span className="text-warning">★ {rating}</span>
          <span
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '19px',
              letterSpacing: '0.04em',
              color: '#1262AF',
              marginLeft: '5px',
            }}
          >
            ({reviews} reviews)
          </span>
        </p>
        <button className="btn btn-outline-primary w-100">MORE DETAILS</button>
      </div>
    </div>
  );
}

export default StayCard;