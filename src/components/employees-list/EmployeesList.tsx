import { useContext } from 'react';
import { TableContext } from '../../context';
import { FormRow } from '../form-row';
import { InfoRow } from '../info-row';

export const EmployeesList: React.FC = () => {
  const { employees, employeeRemoveHandler, employeeAddHandler } =
    useContext(TableContext);

  return (
    <ul>
      {employees.map((employee) => {
        return (
          <InfoRow
            key={employee.id}
            employee={employee}
            onRemove={employeeRemoveHandler}
          />
        );
      })}

      <hr />

      <FormRow />
    </ul>
  );
};
