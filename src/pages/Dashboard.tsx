
import React from 'react';
import Header from '../components/Header';
import DashboardComponent from '../components/Dashboard';

const DashboardPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <DashboardComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
