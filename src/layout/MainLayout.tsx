import { PropsWithChildren } from 'react';
import { Rectangle } from '../components';

import './index.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Rectangle
        tag="header"
        color="red"
        width="100%"
        height="50px"
      ></Rectangle>

      <main>{children}</main>

      <Rectangle
        tag="footer"
        color="green"
        width="100%"
        height="50px"
      ></Rectangle>
    </div>
  );
};
