export type Employee = {
  firstName: string;
  lastName: string;
  startDate: Date;
  department: string;
  dateOfBirth: Date;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export const mockEmployees: Employee[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    startDate: new Date('2021-05-23T10:30:00Z'),
    department: 'Engineering',
    dateOfBirth: new Date('1985-02-10T00:00:00Z'),
    street: '123 Elm St',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62704',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    startDate: new Date('2019-08-17T12:00:00Z'),
    department: 'Marketing',
    dateOfBirth: new Date('1990-04-22T00:00:00Z'),
    street: '456 Oak Ave',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60616',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    startDate: new Date('2020-11-12T08:15:00Z'),
    department: 'Finance',
    dateOfBirth: new Date('1978-12-30T00:00:00Z'),
    street: '789 Pine St',
    city: 'Peoria',
    state: 'IL',
    zipCode: '61602',
  },
  {
    firstName: 'Bob',
    lastName: 'Williams',
    startDate: new Date('2018-02-10T14:30:00Z'),
    department: 'HR',
    dateOfBirth: new Date('1982-09-15T00:00:00Z'),
    street: '321 Cedar Blvd',
    city: 'Naperville',
    state: 'IL',
    zipCode: '60540',
  },
  {
    firstName: 'Emma',
    lastName: 'Brown',
    startDate: new Date('2022-01-05T09:45:00Z'),
    department: 'Sales',
    dateOfBirth: new Date('1995-07-07T00:00:00Z'),
    street: '101 Maple Ave',
    city: 'Rockford',
    state: 'IL',
    zipCode: '61101',
  },
];
