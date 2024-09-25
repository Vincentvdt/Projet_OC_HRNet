import * as yup from 'yup';

export const createEmployeeSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  dateOfBirth: yup
    .date()
    .nullable()
    .required('Date of Birth is required')
    .typeError('Invalid date format'),
  startDate: yup
    .date()
    .nullable()
    .required('Start Date is required')
    .typeError('Invalid date format'),
  street: yup.string().required('Street is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup
    .string()
    .required('Zipcode is required')
    .matches(/^\d{5}$/, 'Zipcode must be a 5-digit number'),
  department: yup.string().required('Please select a department'),
});
