
import React from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import Feed from '@/components/Feed';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-2xl mx-auto">
        <Feed />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
