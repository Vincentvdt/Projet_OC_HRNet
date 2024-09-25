import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';

// Theme
import type { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
// React Grid Logic
import 'ag-grid-community/styles/ag-grid.css';
// Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useEmployeeStore } from '../store/store.tsx';

import type { Employee } from '../mock/employee.ts';
import InputField from '../components/styled/InputField.tsx';

// Styled components and CSS from Emotion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 1200px;
  text-align: center;
  width: 100%;
  height: 700px;
  max-height: calc(100dvh - 50px);
  padding: 10px 0;
`;

const QuickSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-weight: 500;
    color: #181d1f;
  }
`;
const SearchBar = styled(InputField)`
  max-width: 180px;
  cursor: inherit;
`;

const EmployeeTable: React.FC = () => {
  const gridRef = useRef<AgGridReact>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const employees = useEmployeeStore((state) => state.employees);

  const [colDefs] = useState<ColDef<Employee>[]>([
    { field: 'firstName' },
    { field: 'lastName' },
    {
      field: 'dateOfBirth',
      filter: true,
      valueFormatter: (p) => p.value.toLocaleDateString('fr-FR'),
    },
    { field: 'department', filter: true },
    {
      field: 'startDate',
      filter: true,
      valueFormatter: (p) => p.value.toLocaleDateString('fr-FR'),
    },
    { field: 'street' },
    { field: 'city' },
    { field: 'state' },
    { field: 'zipCode' },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
    };
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current!.api.setGridOption('quickFilterText', searchRef.current!.value);
  }, []);
  return (
    <Container className={'ag-theme-quartz'}>
      <h1>Current Employees</h1>
      <QuickSearch>
        <span>Search :</span>
        <SearchBar
          ref={searchRef}
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
      </QuickSearch>
      <AgGridReact
        ref={gridRef}
        rowData={employees}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 15, 20, 50]}
        selection={{
          mode: 'multiRow',
          checkboxes: false,
          headerCheckbox: false,
          enableClickSelection: true,
        }}
      />
    </Container>
  );
};

export default EmployeeTable;
