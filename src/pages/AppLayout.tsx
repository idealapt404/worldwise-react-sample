import React from 'react';
import styles from './AppLayout.module.css';
import Sidebar from '../components/Sidebar.tsx';

const AppLayout: React.FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}

export default AppLayout;
