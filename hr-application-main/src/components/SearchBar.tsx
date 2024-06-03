import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Employee, getEmployees } from '../services/employeeService';

const options = {
  keys: ['name', 'skills']
};

const SearchBar: React.FC<{ onSearch: (results: Employee[]) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const fuse = new Fuse(getEmployees(), options);
    const results = fuse.search(query).map(result => result.item);
    onSearch(results);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        style={{ width: '400px', padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button 
        onClick={handleSearch} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

