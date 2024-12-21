import React from 'react';

const rooms = [
  { id: 1, name: 'Deluxe Room', price: '$100', available: true },
  { id: 2, name: 'Standard Room', price: '$80', available: false },
  { id: 3, name: 'Suite', price: '$200', available: true },
];

const Rooms = () => {
  return (
    <div>
      <h2>Available Rooms</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {rooms.map((room) => (
          <div
            key={room.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{room.name}</h3>
            <p>Price: {room.price}</p>
            <p>Status: {room.available ? 'Available' : 'Booked'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
