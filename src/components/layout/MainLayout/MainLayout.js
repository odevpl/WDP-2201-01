import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ deviceFromContainer, children, changeDevice }) => {
  const [device, setDevice] = useState(window.innerWidth);
  const [currDevice, setCurrDevice] = useState('');

  const checkDevice = () => {
    let deviceInCheckDevice = 'mobile';
    if (device >= 1200) deviceInCheckDevice = 'desktop';
    if (device >= 992) deviceInCheckDevice = 'tablet';
    if (device >= 768) deviceInCheckDevice = 'mobile';

    return deviceInCheckDevice;
  };

  let deviceForCurrentDevice = 'mobile';
  if (device >= 1200) deviceForCurrentDevice = 'desktop';
  if (device >= 992) deviceForCurrentDevice = 'tablet';
  if (device >= 768) deviceForCurrentDevice = 'mobile';

  const checkSize = () => {
    setDevice(window.innerWidth);
  };

  const checkSizeForCurrentDevice = () => {
    setCurrDevice(deviceForCurrentDevice);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    checkSizeForCurrentDevice();
    if (deviceFromContainer !== currDevice) {
      changeDevice(checkDevice());
      return () => {
        window.removeEventListener('resize', checkSize);
      };
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
  deviceFromContainer: PropTypes.string,
  children: PropTypes.node,
};

export default MainLayout;
