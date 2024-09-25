import styled from '@emotion/styled';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { DateTimepicker } from '@vincentvdt/datetimepicker';
import Select from 'react-select';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import useEmployeeStore from '../store/store.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import type { Employee } from '../mock/employee.ts';
import { states } from '../data/states.ts';
import { departments } from '../data/departments.ts';
import { Button } from '../components/common/Button.tsx';
import Label from '../components/styled/Label.tsx';
import InputField from '../components/styled/InputField.tsx';
import SuccessMessage from '../components/styled/SuccessMessage.ts';
import Loader from '../components/styled/Loader.tsx';
import {
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from '../components/styled/AlertDialog.tsx';
import { createEmployeeSchema } from '../schemas/employeeSchema';

const FormContainer = styled.div<{ loading: boolean }>`
  padding: ${({ loading }) => (loading ? '0 30px' : '30px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  max-width: 600px;
  background-color: #f7f9fb;
  border-radius: 8px;
  margin-top: 25px;

  h2 {
    margin: 0;
  }

  form {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
  }
`;

const stateOptions = states.map((state) => ({
  value: state.abbreviation,
  label: state.name,
}));

const departmentOptions = departments.map((department) => ({
  label: department,
  value: department.toLowerCase().replace(/\s+/g, '-'),
}));

/**
 * Component for creating a new employee.
 *
 * @returns JSX Element for employee creation form.
 */
const CreateEmployee = () => {
  const navigate = useNavigate();
  const addEmployees = useEmployeeStore((state) => state.addEmployee);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState<Employee | null>(null);

  // Initializing form management using react-hook-form with validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Employee>({ resolver: yupResolver(createEmployeeSchema) });

  /**
   * Handles form submission and sets employee data for confirmation.
   *
   * @param data - Employee form data.
   */
  const handleFormSubmit: SubmitHandler<Employee> = (data) => {
    setEmployeeInfo(data);
    setOpen(true); // Open the modal for confirmation
  };

  /**
   * Handles confirmation of the employee creation process.
   * Simulates an API call, adds the employee to the store, and navigates to employee listing.
   */
  const handleConfirmation = () => {
    setLoading(true);
    // Simulate the API call
    setTimeout(() => {
      addEmployees(employeeInfo!);
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
        navigate('/employee');
      }, 2000);
    }, 2000);
  };

  return (
    <FormContainer loading={loading || success}>
      {loading ? (
        <Loader>Submitting... Please wait.</Loader>
      ) : success ? (
        <SuccessMessage>Employee created successfully!</SuccessMessage>
      ) : (
        <>
          <h2>Add New Employee</h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Label htmlFor="firstName">First Name</Label>
            <InputField error={!!errors.firstName} type="text" {...register('firstName')} />
            <small>{errors.firstName?.message}</small>

            <Label htmlFor="lastName">Last Name</Label>
            <InputField error={!!errors.lastName} type="text" {...register('lastName')} />
            <small>{errors.lastName?.message}</small>

            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <DateTimepicker
              name="dateOfBirth"
              selected={getValues('dateOfBirth')}
              onDateChange={(date) => setValue('dateOfBirth', date)}
              customInput={<InputField error={!!errors.dateOfBirth} />}
              calendarWidth={300}
            />
            <small>{errors.dateOfBirth?.message}</small>

            <Label htmlFor="startDate">Start Date</Label>
            <DateTimepicker
              name="startDate"
              selected={getValues('startDate')}
              onDateChange={(date) => setValue('startDate', date)}
              customInput={<InputField error={!!errors.startDate} />}
              calendarWidth={300}
            />
            <small>{errors.startDate?.message}</small>

            <Label htmlFor="street">Street</Label>
            <InputField error={!!errors.street} type="text" {...register('street')} />
            <small>{errors.street?.message}</small>

            <Label htmlFor="city">City</Label>
            <InputField error={!!errors.city} type="text" {...register('city')} />
            <small>{errors.city?.message}</small>

            <Label htmlFor="state">State</Label>
            <Select
              onChange={(state) => setValue('state', state!.label)}
              options={stateOptions}
              isClearable
            />
            <small>{errors.state?.message}</small>

            <Label htmlFor="zipCode">Zipcode</Label>
            <InputField error={!!errors.zipCode} type="text" {...register('zipCode')} />
            <small>{errors.zipCode?.message}</small>

            <Label htmlFor="department">Department</Label>
            <Select
              onChange={(department) => setValue('department', department!.label)}
              options={departmentOptions}
              isClearable
            />
            <small>{errors.department?.message}</small>

            <Button type="submit">Submit</Button>
          </form>
        </>
      )}

      {/* Confirmation dialog for employee creation */}
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Portal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            {!success ? (
              <>
                <AlertDialogTitle>Confirm Employee Creation</AlertDialogTitle>
                <AlertDialogDescription>
                  You are about to create a new employee with the following details:
                  <ul>
                    <li>
                      <span>First Name:</span> {employeeInfo?.firstName}
                    </li>
                    <li>
                      <span>Last Name:</span> {employeeInfo?.lastName}
                    </li>
                    <li>
                      <span>Date of Birth:</span> {employeeInfo?.dateOfBirth?.toLocaleDateString()}
                    </li>
                    <li>
                      <span>Start Date:</span> {employeeInfo?.startDate.toLocaleDateString()}
                    </li>
                    <li>
                      <span>Department:</span> {employeeInfo?.department}
                    </li>
                    <li>
                      <span>Address:</span>
                      <br /> {employeeInfo?.street}
                      <br />
                      {employeeInfo?.city}
                      <br /> {employeeInfo?.state} {employeeInfo?.zipCode}
                    </li>
                  </ul>
                </AlertDialogDescription>
                <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                  <AlertDialog.Cancel asChild>
                    <Button variant="red" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <Button variant="green" onClick={handleConfirmation}>
                      Confirm
                    </Button>
                  </AlertDialog.Action>
                </div>
              </>
            ) : (
              <SuccessMessage>Employee created successfully!</SuccessMessage>
            )}
          </AlertDialogContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </FormContainer>
  );
};

export default CreateEmployee;
