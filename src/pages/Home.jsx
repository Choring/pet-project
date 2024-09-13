import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [filterMuseum, setFilterMuseum] = useState(false);
  const [page, setPage] = useState(1);
  return (
    <div>
      <Navbar setFilterMuseum={setFilterMuseum} setPage={setPage} />
      <Sidebar filterMuseum={filterMuseum} page={page} setPage={setPage} />
      <Footer />
    </div>
  );
}
