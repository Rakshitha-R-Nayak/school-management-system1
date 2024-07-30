import React from 'react';
import Login from '../auth/Login'; 
import StudentAttendance  from '../../table'

const StudentDashboard = () => (
  <div>
    <h2>Student Dashboard</h2>
    <p>Welcome, Student!
      login with student id 
    </p>
    <Login/>
  </div>
);

export default StudentDashboard;
