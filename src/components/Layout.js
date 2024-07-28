import React from 'react';

import Sidebar from './Sidebar';

function Layout({ children }) {
  

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
       
        <main className="p-4">{children}</main>
      
      </div>
    </div>
  );
}

export default Layout;
