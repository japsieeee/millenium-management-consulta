import React from 'react';

import Navbar from './Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-[1200px] mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
