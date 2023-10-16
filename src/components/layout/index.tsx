import React from 'react';

import Navbar from './Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <div>
    <Navbar />
    <main className="max-w-[1600px] mx-auto">{children}</main>
  </div>
);

export default Layout;
