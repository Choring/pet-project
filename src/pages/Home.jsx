import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}
