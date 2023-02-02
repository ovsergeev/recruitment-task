import { useState } from 'react';
import { IEmployee } from '../../core';

interface IInfoRowProps {
  employee: IEmployee;
  onRemove: (id: string) => void;
}

export const InfoRow: React.FC<IInfoRowProps> = ({ employee, onRemove }) => {
  const { name, surname, id } = employee;

  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  return (
    <li className={isHighlighted ? 'highlight' : ''}>
      <span>{name}</span>
      <span>{surname}</span>
      <span>
        <button
          onClick={() => onRemove(id)}
          onMouseOver={() => setIsHighlighted(true)}
          onMouseOut={() => setIsHighlighted(false)}
        >
          Remove
        </button>
      </span>
    </li>
  );
};
