import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ deviceType, children, changeDevice }) => {
  let currentDevice = '';

  const checkDevice = () => {
    const device = window.innerWidth;

    if (device >= 1200) {
      currentDevice = 'desktop';
    } else if (device >= 992 && device < 1200) {
      currentDevice = 'tablet';
    } else {
      currentDevice = 'mobile';
    }

    if (deviceType !== currentDevice) {
      changeDevice(currentDevice);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkDevice);
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  changeDevice: PropTypes.func,
  deviceType: PropTypes.string,
  children: PropTypes.node,
  deviceType: PropTypes.string,
  changeDevice: PropTypes.func,
};

export default MainLayout;
