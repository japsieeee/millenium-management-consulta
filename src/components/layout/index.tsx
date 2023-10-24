import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <div>
    <Navbar />
    <main
      style={{
        minHeight: 'calc(100vh - 430px)',
      }}
      className="max-w-[1600px] mx-auto"
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
