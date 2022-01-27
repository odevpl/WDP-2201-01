import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ deviceType, children, changeDevice }) => {
  const [device] = useState(window.innerWidth);

  const checkDevice = () => {
    let deviceInCheckDevice = 'mobile';
    if (device >= 1200) deviceInCheckDevice = 'desktop';
    if (device >= 992 && device < 1200) deviceInCheckDevice = 'tablet';
    if (device >= 768 && device < 992) deviceInCheckDevice = 'mobile';

    return deviceInCheckDevice;
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
