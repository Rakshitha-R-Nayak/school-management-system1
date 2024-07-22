import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import AdminDashboard from './dashboards/AdminDashboard';
import StudentDashboard from './dashboards/StudentDashboard';
import TeacherDashboard from './dashboards/TeacherDashboard';
import ParentDashboard from './dashboards/ParentDashboard';
import MainLayout from './layouts/MainLayout';

const Routes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/student" component={StudentDashboard} />
        <Route path="/teacher" component={TeacherDashboard} />
        <Route path="/parent" component={ParentDashboard} />
        <Route path="/" exact component={() => <div>Home Page</div>} />
      </Routes>
    </MainLayout>
  </Router>
);

export default Routes;
