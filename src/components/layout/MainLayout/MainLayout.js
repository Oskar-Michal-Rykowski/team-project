import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, setViewportWidth }) => {
  const smallSize = 'mobile';
  const mediumSize = 'tablet';
  const bigSize = 'desctop';

  let viewMode = smallSize;
  function handleResize() {
    if (window.innerWidth < 768) {
      viewMode = smallSize;
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      viewMode = mediumSize;
    } else if (window.innerWidth >= 992) {
      viewMode = bigSize;
    }
    setViewportWidth(viewMode);
  }

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
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
  children: PropTypes.node,
  setViewportWidth: PropTypes.func,
};

export default MainLayout;
