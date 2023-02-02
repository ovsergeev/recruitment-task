import { useState } from 'react';
import { FormRow } from '../form-row';
import { InfoRow } from '../info-row';
import { Employee, IEmployee } from '../../core';

import './index.css';

export const Table: React.FC = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const employeeRemoveHandler = (id: string): void => {
    setEmployees((prev) => prev.filter((i) => i.id !== id));
  };

  const employeeAddHandler = (name: string, surname: string): boolean => {
    if (!name || !surname) {
      setHasError(true);
      return false;
    }

    const newEmployee = new Employee(name, surname);

    setEmployees((prev) => [...prev, newEmployee]);
    setHasError(false);
    return true;
  };

  return (
    <div className="wrapper">
      <h2>Form</h2>

      <ul className="table">
        {employees.map((employee) => {
          return (
            <InfoRow
              key={employee.id}
              employee={employee}
              onRemove={employeeRemoveHandler}
            />
          );
        })}
        <FormRow onAdd={employeeAddHandler} disabled={employees.length >= 5} />
      </ul>

      {hasError ? (
        <div className="validation-block">
          Employee must have a name and surname.
        </div>
      ) : null}
    </div>
  );
};
