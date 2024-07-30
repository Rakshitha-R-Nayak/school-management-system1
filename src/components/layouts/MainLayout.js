import React from 'react';
import NavigationBar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => (
  <div>
    <NavigationBar />
    <main className="container mt-3">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
