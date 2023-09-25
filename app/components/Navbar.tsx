'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to handle screen width changes
    const handleScreenSize = () => {
      const screenWidth = window.innerWidth;

      // Set the initial state based on screen width
      if (screenWidth <= 768) {
        setOpen(false); // For small screens (adjust the threshold as needed)
      } else {
        setOpen(true); // For large screens
      }
    };

    // Call the function once to set the initial state
    handleScreenSize();

    // Add an event listener to handle screen size changes
    window.addEventListener('resize', handleScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <div className="flex justify-center items-center mb-5 sm:hidden ">
        <button className="material-icons" onClick={() => setOpen(!open)}>
          <i>menu</i>
        </button>
      </div>
      {open && (
        <nav className='min-w-max bg-black-600 flex flex-col justify-center place-items-center sm:flex-row mt-10 '>
          <Link className="mb-4 hover:bg-yellow-700" href="/friends">
            Friends
          </Link>
          <Link className="mb-4 bg-black-500 hover:bg-yellow-700  sm:ml-5" href="/split">
            Split Bill
          </Link>
          <Link className="mb-4 bg-black-500 hover:bg-yellow-700 sm:ml-5"  href="/addfriends">
            Add Friends
          </Link>
        </nav>
      )}
    </>
  );
}
