/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from '@/components/app-pages/home';
import React from 'react';

const HomePage = ({ params }: { params: any }) => {
  const shopId = params?.shop;
  return (
    <div>
      <Home shopId={shopId} />
    </div>
  );
};

export default HomePage;