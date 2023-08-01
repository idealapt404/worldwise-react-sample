import React  from 'react';
import styles from './Button.module.css';
import { ParentProps } from '../pages/HomePage.tsx';

interface ButtonProps extends ParentProps {
  onClick?: () => void;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type}) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
