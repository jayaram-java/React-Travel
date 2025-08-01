import React from 'react';

interface TravelEntry {
  id: number;
  destination: string;
  date: string;
  status: 'Planned' | 'Completed' | 'Cancelled';
}

const travelData: TravelEntry[] = [
  { id: 1, destination: 'Paris', date: '2025-07-15', status: 'Planned' },
  { id: 2, destination: 'New York', date: '2025-05-10', status: 'Completed' },
  { id: 3, destination: 'Tokyo', date: '2025-09-01', status: 'Cancelled' },
];

const TravelList: React.FC = () => {
  return (
    <div>
      <h2>Upcoming & Past Travels</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>Destination</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {travelData.map((trip) => (
            <tr key={trip.id}>
              <td style={tdStyle}>{trip.destination}</td>
              <td style={tdStyle}>{trip.date}</td>
              <td style={tdStyle}>{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = { border: '1px solid #ccc', padding: '8px', background: '#f4f4f4' };
const tdStyle = { border: '1px solid #ccc', padding: '8px' };

export default TravelList;
