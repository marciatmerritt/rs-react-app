import { FC, ReactNode } from 'react';
import './navbar.css';

interface NavBarProps {
  children: ReactNode;
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ children, className = '' }) => {
  return <nav className={`nav ${className}`.trim()}>{children}</nav>;
};

export default NavBar;
