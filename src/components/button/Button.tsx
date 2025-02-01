import { FC, ReactNode } from 'react';
import './button.css';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`btn ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
