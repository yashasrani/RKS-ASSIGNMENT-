import React from 'react';
import { Employee } from '../services/employeeService';

interface EmployeeListProps {
  employees: Employee[];
  onDelete: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Performance Reviews</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td style={{ padding: '10px' }}>{emp.id}</td>
              <td style={{ padding: '10px' }}>{emp.name}</td>
              <td style={{ padding: '10px' }}>{emp.department}</td>
              <td style={{ padding: '10px' }}>{emp.skills.join(', ')}</td>
              <td style={{ padding: '10px' }}>{emp.experience} years</td>
              <td style={{ padding: '10px' }}>{emp.performanceReviews.join(', ')}</td>
              <td style={{ padding: '10px' }}>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
