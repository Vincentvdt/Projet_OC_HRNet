/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, FC } from 'react';
import { css } from '@emotion/react';

// Common base styles for both button and link
const BaseButtonStyles = css`
  font-size: 1rem;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
`;

// Base styled components
const BaseButton = styled.button`
  ${BaseButtonStyles};
  background: none;
  border: none;
`;

const BaseLink = styled(Link)`
  ${BaseButtonStyles}
`;

// Function to create variant styles
const getVariantStyles = (variant: 'green' | 'blue' | 'text' | 'red') => {
  switch (variant) {
    case 'green':
      return css`
        color: #f4fbf6;
        background-color: #30a46c;

        &:hover {
          background-color: #2b9a66;
        }
      `;
    case 'red':
      return css`
        color: #e54d2e;
        background-color: transparent;
        border: 1px solid transparent;

        &:hover {
          color: #e54d2e;
          border-color: #dd4425;
        }
      `;
    case 'text':
      return css`
        color: #0d74ce;
        background-color: transparent;
        border: 1px solid transparent;

        &:hover {
          color: #0d74ce;
          border-color: #0d74ce;
        }
      `;
    default: // "blue"
      return css`
        color: #f4faff;
        background-color: #0090ff;

        &:hover {
          background-color: #0588f0;
        }
      `;
  }
};

// Styled components for Button
const StyledButton = styled(BaseButton)<{ variant: 'green' | 'blue' | 'text' | 'red' }>`
  ${({ variant }) => getVariantStyles(variant)}
`;

// Styled components for LinkButton
const StyledLinkButton = styled(BaseLink)<{ variant: 'green' | 'blue' | 'text' | 'red' }>`
  ${({ variant }) => getVariantStyles(variant)}
`;

// Define the props for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'blue' | 'text' | 'red'; // Button variants
}

// Button component for rendering a regular button
const Button: FC<ButtonProps> = ({ variant = 'blue', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export { Button };

// Define the props for the LinkButton component
interface LinkButtonProps extends LinkProps {
  variant?: 'green' | 'blue' | 'text' | 'red'; // Link button variants
}

// LinkButton component for rendering a link styled as a button
const LinkButton: FC<LinkButtonProps> = ({ variant = 'blue', children, ...props }) => {
  return (
    <StyledLinkButton variant={variant} {...props}>
      {children}
    </StyledLinkButton>
  );
};

export { LinkButton };
