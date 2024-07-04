import React from 'react';
import './Departments.css'; // Import the CSS file for styling

const departments = [
  { name: 'AIDS', count: 120 },
  { name: 'ECE', count: 150 },
  { name: 'AI&IOT', count: 110 },
  { name: 'Medical Electronic', count: 110 },
  { name: 'BME', count: 110 },
  { name: 'EEE', count: 100 },
  { name: 'MECH', count: 130 },
  { name: 'EIE', count: 90 },
  { name: 'AIML', count: 110 },
  { name: 'AICS', count: 80 },
  { name: 'CSE', count: 200 }
];

const Departments = () => {
  return (
    <div className="departments-container">
      <h1>Departments</h1>
      <table className="departments-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index}>
              <td>{department.name}</td>
              <td>{department.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
