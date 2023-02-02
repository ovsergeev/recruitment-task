import { PropsWithChildren } from 'react';

import './index.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header"></header>

      <main className="main">{children}</main>

      <footer className="footer"></footer>
    </div>
  );
};
