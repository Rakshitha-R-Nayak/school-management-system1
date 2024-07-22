import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Register from './components/auth/Register';
import Text from './text';
import AdminDashboard from './components/dashboard/AdminDashboard';
import ParentDashboard from './components/dashboard/ParentDashboard';
import StudentDashboard from './components/dashboard/StudentDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import Student from './components/info/student'
function App() {
  return (<>
    <Student/>
    
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">School Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
              <Nav.Link href="/register">Register</Nav.Link> 
              <Nav.Link href="/admin">Admin Portal</Nav.Link>
              <Nav.Link href="/parent">Parent Portal</Nav.Link>
              <Nav.Link href="/student">Student Portal</Nav.Link>
              <Nav.Link href="/teacher">Teacher Portal</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="mt-4">
          <Routes>
          


            <Route path="/" element={<Text />} />  
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
          </Routes>
        </Container>
        <footer className="bg-dark text-white text-center py-3 mt-4">
          <p>&copy; {new Date().getFullYear()} School Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
    <Student/>
    </>
  );
}

export default App;
