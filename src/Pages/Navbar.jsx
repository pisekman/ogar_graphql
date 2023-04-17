import React from 'react';

const Navbar = () => {
  const navItem = [
    'Strona glowna',
    'O nas',
    'Kontakt',
    'Instagram',
    'Social',
  ];
  return (
    <nav className='navbar'>
      {navItem.map((nav) => (
        <p>{nav.toLocaleUpperCase()}</p>
      ))}
    </nav>
  );
};

export default Navbar;
