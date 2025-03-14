
import React from 'react';
import Header from '../components/Header';
import CardManager from '../components/CardManager';

const CardPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <CardManager />
      </div>
    </div>
  );
};

export default CardPage;
