import React from 'react';
import { getEmployees } from '../services/employeeService';

const Reports: React.FC = () => {
  const employees = getEmployees();

  // Calculate total number of employees
  const totalEmployees = employees.length;

  // Calculate average experience
  const totalExperience = employees.reduce((total, employee) => total + employee.experience, 0);
  const averageExperience = totalExperience / totalEmployees;

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Employees: {totalEmployees}</p>
      <p>Average Experience: {averageExperience.toFixed(2)} years</p>
      {/* Add more report metrics as needed */}
    </div>
  );
};

export default Reports;
