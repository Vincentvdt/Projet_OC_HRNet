import { create } from 'zustand';
import { mockEmployees } from '../mock/employee.ts';
import type { Employee } from '../mock/employee.ts';

export type EmployeeState = {
  employees: Employee[];
  addEmployee: (_employee: Employee) => void;
  setEmployees: (_employees: Employee[]) => void;
};

// Zustand store definition
export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [...mockEmployees],
  addEmployee: (employee: Employee) =>
    set((state) => ({
      employees: [...state.employees, employee],
    })),

  setEmployees: (employees: Employee[]) => set(() => ({ employees })),
}));
export default useEmployeeStore;
