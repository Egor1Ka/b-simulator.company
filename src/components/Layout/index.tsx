import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <div />
    {children}
    <main>Hello</main>
  </div>
);

export default Layout;
