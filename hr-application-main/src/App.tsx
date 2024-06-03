// App.tsx
import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import SelectionProcess from './components/SelectionProcess';
import Reports from './components/Reports';
import { Employee, getEmployees, deleteEmployee } from './services/employeeService';

import './App.css'; // Import CSS file for styling

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(getEmployees());
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);

  const handleDelete = (id: number) => {
    console.log(`Deleting employee with ID ${id}`);
    deleteEmployee(id);
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">HR Application</h1>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <SearchBar onSearch={setFilteredEmployees} />
          <SelectionProcess />
        </aside>
        <main className="content">
          <EmployeeList employees={filteredEmployees} onDelete={handleDelete} />
          <EmployeeForm />
          <Reports />
          
        </main>
      </div>
      <footer className="app-footer">
        <p>&copy; 2024 HR Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
