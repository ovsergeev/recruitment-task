import { FormEvent, useContext, useState } from 'react';
import { TableContext } from '../../context';

export const FormRow: React.FC = () => {
  const { employeeAddHandler, isLimitReached } = useContext(TableContext);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    const _name = name.trim();
    const _surname = surname.trim();

    const isAdded = employeeAddHandler(_name, _surname);

    if (isAdded) {
      setName('');
      setSurname('');
    }
  };

  return (
    <li>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div className="form-control">
          <label htmlFor="surname">Surname</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            name="surname"
            id="surname"
          />
        </div>

        <span>
          <button disabled={isLimitReached} type="submit">
            Add
          </button>
        </span>
      </form>
    </li>
  );
};
