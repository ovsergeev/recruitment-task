import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Employee, IEmployee } from '../core';

interface ITableContext {
  employees: IEmployee[];
  hasError: boolean;
  isLimitReached: boolean;
  employeeRemoveHandler: (id: string) => void;
  employeeAddHandler: (name: string, surname: string) => boolean;
}

const tableContextInitState: ITableContext = {
  employees: [],
  hasError: false,
  isLimitReached: false,
  employeeRemoveHandler: () => {},
  employeeAddHandler: () => true,
};

export const TableContext = createContext(tableContextInitState);

export const TableContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLimitReached, setLimitReached] = useState<boolean>(false);

  useEffect(() => {
    const isMaxEmployees = employees.length >= 5;
    setLimitReached(isMaxEmployees);
  }, [employees]);

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

  const tableContextValue: ITableContext = {
    employees,
    hasError,
    isLimitReached,
    employeeRemoveHandler,
    employeeAddHandler,
  };

  return (
    <TableContext.Provider value={tableContextValue}>
      {children}
    </TableContext.Provider>
  );
};
