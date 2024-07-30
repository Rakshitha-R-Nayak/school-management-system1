import React from 'react';
import Login from '../auth/Login'; 
const ParentDashboard = () => (
  <div>
    <h2>Parent Dashboard</h2>
    <p>Welcome, Teacher!
        Login with faculty id
    </p>
    <Login/>
    {/* Add parent-specific components and functionality here */}
  </div>
);

export default ParentDashboard;
