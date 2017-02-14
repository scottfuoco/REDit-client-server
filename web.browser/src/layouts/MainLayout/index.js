import React, { PropTypes } from 'react';
import HeaderBar from '../../components/HeaderBar';
import App from '../../containers/App';
import styles from './styles.css';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <HeaderBar />
      <App />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
