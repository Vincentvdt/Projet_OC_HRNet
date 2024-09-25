import styled from '@emotion/styled';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.43);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const AlertDialogContent = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;

export const AlertDialogTitle = styled(AlertDialog.Title)`
  margin: 0;
  color: black;
  font-size: 17px;
  font-weight: 500;
`;

export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: black;
  font-size: 15px;
  line-height: 1.5;

  li {
    list-style: none;

    span {
      font-weight: 500;
    }
  }
`;
