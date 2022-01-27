import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ deviceType, children, changeDevice }) => {
  const checkDevice = () => {
    const device = window.innerWidth;
    if (device >= 1200) {
      return 'desktop';
    } else if (device >= 992 && device < 1200) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkDevice);
    const currentDevice = checkDevice();
    if (deviceType !== currentDevice) {
      changeDevice(currentDevice);
    }
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
};

export default MainLayout;
