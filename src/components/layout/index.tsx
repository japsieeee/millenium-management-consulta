import React, { useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

interface ILayout {
	children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main
        style={{
				  minHeight: 'calc(100vh - 430px)',
        }}
        className="max-w-[1600px] mx-auto"
      >
        <div className="mt-[80px] w-full" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
