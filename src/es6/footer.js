import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <div className="container-bottom">
          <div className="fade-border-up"></div>
          <div className="separator"></div>
          <div className="menu-option">Position</div>
          <div className="separator-small"></div>
          <div className="menu-option">Device</div>
          <div className="separator"></div>
          <div className="fade-border-up"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
