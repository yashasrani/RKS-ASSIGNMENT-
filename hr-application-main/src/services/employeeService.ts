export interface Employee {
    id: number;
    name: string;
    department: string;
    skills: string[];
    experience: number;
    performanceReviews: string[];
  }
  
  let employees: Employee[] = [
    { id: 1, name: "John Doe", department: "Engineering", skills: ["JavaScript", "React"], experience: 5, performanceReviews: ["Excellent"] },
    { id: 2, name: "Jane Smith", department: "Marketing", skills: ["SEO", "Content Creation"], experience: 3, performanceReviews: ["Good", "Very Good"] },
    { id: 3, name: "Sam Brown", department: "Human Resources", skills: ["Recruitment", "Employee Relations"], experience: 4, performanceReviews: ["Excellent", "Outstanding"] },
    { id: 4, name: "Alice Johnson", department: "Finance", skills: ["Budgeting", "Forecasting"], experience: 6, performanceReviews: ["Good", "Excellent"] },
    { id: 5, name: "Mike Davis", department: "Engineering", skills: ["Java", "Spring"], experience: 7, performanceReviews: ["Outstanding", "Excellent"] },
    { id: 6, name: "Emily Wilson", department: "Design", skills: ["Graphic Design", "UI/UX"], experience: 2, performanceReviews: ["Very Good", "Good"] },
    { id: 7, name: "Daniel Lee", department: "Sales", skills: ["Salesforce", "Negotiation"], experience: 5, performanceReviews: ["Excellent", "Very Good"] },
    { id: 8, name: "Sophia Turner", department: "Customer Support", skills: ["Customer Service", "Problem Solving"], experience: 3, performanceReviews: ["Good", "Very Good"] },
  ];
  
  export const getEmployees = () => employees;
  
  export const addEmployee = (employee: Employee) => {
    employees.push({ ...employee, id: employees.length + 1 });
  };
  
  export const editEmployee = (id: number, updatedEmployee: Partial<Employee>) => {
    employees = employees.map(emp => emp.id === id ? { ...emp, ...updatedEmployee } : emp);
  };
  
  export const deleteEmployee = (id: number) => {
    employees = employees.filter(emp => emp.id !== id);
  };
  