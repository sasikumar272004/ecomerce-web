'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // This will trigger the animation when the component mounts
    setShowNav(true);
  }, []);

  return (
    <nav
      className={`pt-1 flex justify-between transition-transform duration-700 ease-out text-[16px] text-[#707075] ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } fixed top-0 left-0 w-full z-50 bg-transparent `}
    >
      <div className='pt-4 pl-10'>
        <h1>STARBUCKS</h1>
      </div>
      <div className='flex   gap-10 pt-4 pr-16'>
        <h1>SHOP</h1>
      </div>
    </nav>
  );
};

export default Navbar;
