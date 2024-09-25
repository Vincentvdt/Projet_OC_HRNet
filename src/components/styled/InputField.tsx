import styled from '@emotion/styled';

export const InputField = styled.input<{ error?: boolean }>`
  padding: 7px;

  border: none;
  border-radius: 4px;
  outline: ${({ error }) => (error ? '1px solid red' : '1px solid #ccc')};
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  flex-grow: 1;

  &:focus-visible {
    outline: 1px solid blue;
  }
`;

export default InputField;
