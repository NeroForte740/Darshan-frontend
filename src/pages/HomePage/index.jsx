import React from 'react';

import Footer from '../../components/Footer';
import HomeButtons from './components/HomeButtons';
import HomeOrdersList from './components/HomeOrdersList';

function HomePage() {

  return (
    <div className='grid w-full h-full'>
      <div className='w-full md:h-4/5 grid md:flex md:justify-between md:items-end'>
        <HomeButtons />
        <HomeOrdersList />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;