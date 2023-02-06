import { useContext } from 'react';
import { TableContext } from '../../context';
import { EmployeesList } from '../employees-list';
import { ErrorBlock } from '../error-block';

import './index.css';

export const Table: React.FC = () => {
  const { hasError } = useContext(TableContext);

  return (
    <div className="wrapper">
      <h2>Table</h2>

      <EmployeesList />

      {hasError ? <ErrorBlock /> : null}
    </div>
  );
};
