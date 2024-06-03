import React, { useState } from 'react';
import { addEmployee, Employee } from '../services/employeeService';

const EmployeeForm: React.FC = () => {
  const [employee, setEmployee] = useState<Partial<Employee>>({
    name: '',
    department: '',
    skills: [],
    experience: 0,
    performanceReviews: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setEmployee({ ...employee, skills: value.split(',').map(skill => skill.trim()) });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employee.name && employee.department && (employee.skills as string[]).length) {
      addEmployee(employee as Employee);
      setEmployee({
        name: '',
        department: '',
        skills: [],
        experience: 0,
        performanceReviews: []
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={employee.name as string} onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" value={employee.department as string} onChange={handleChange} />
      <input type="text" name="skills" placeholder="Skills (comma separated)" value={(employee.skills as string[]).join(', ')} onChange={handleChange} />
      <input type="number" name="experience" placeholder="Experience" value={employee.experience as number} onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
