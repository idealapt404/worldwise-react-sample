import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldEise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
