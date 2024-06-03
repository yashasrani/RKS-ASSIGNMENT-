import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getEmployees } from '../services/employeeService';

const Visualization: React.FC = () => {
  const employees = getEmployees();
  const data = employees.map(emp => ({
    name: emp.name,
    experience: emp.experience
  }));

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="experience" fill="#8884d8" />
    </BarChart>
  );
};

export default Visualization;
