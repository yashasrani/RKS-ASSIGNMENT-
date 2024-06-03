import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmployeeForm from '../components/EmployeeForm';
import * as employeeService from '../services/employeeService'; // Import the employee service module

// Mock the addEmployee function
jest.mock('../services/employeeService', () => ({
  addEmployee: jest.fn(),
}));

test('renders employee form and submits data', () => {
  const { getByPlaceholderText, getByText } = render(<EmployeeForm />);
  
  fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Jane Doe' } });
  fireEvent.change(getByPlaceholderText('Department'), { target: { value: 'HR' } });
  fireEvent.change(getByPlaceholderText('Skills (comma separated)'), { target: { value: 'Communication,Leadership' } });
  fireEvent.change(getByPlaceholderText('Experience'), { target: { value: 3 } });
  
  fireEvent.click(getByText('Add Employee'));
  
  // Verify that addEmployee function is called with the correct data
  expect(employeeService.addEmployee).toHaveBeenCalledWith({
    name: 'Jane Doe',
    department: 'HR',
    skills: ['Communication', 'Leadership'],
    experience: 3,
  });
});
