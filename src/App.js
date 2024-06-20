import React, { useState } from 'react';

import Counter from './components/Counter';
import Footer from './components/Footer';
import Galery from './components/Galery';
import Nav from './components/Nav';
import LoveQuotes from './components/LoveQuotes/LoveQuotes';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSequenceMatch = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const targetDate = '2023-03-22T20:00:00';

  return (
    <div className="App">
      <LoveQuotes open={isModalOpen} onClose={handleCloseModal}/>
      <Nav onSequenceMatch={handleSequenceMatch}/>
      <Counter targetDate={targetDate}/>
      <Galery />
      <Footer />
    </div>
  );
}

export default App;