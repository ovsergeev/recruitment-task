import { IEmployee } from './../interfaces/employee';
import { generateRandomId } from './../helpers';

export class Employee implements IEmployee {
  public name: string;
  public surname: string;
  public id: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
    this.id = generateRandomId();
  }
}
