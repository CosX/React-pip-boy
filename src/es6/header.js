import React from 'react';

class Header extends React.Component {
  render() {
    return(
        <div className="header">
          <div className="stats">
            <div className="title">STATS</div>
          </div>
          <div className="hp">
            <div className="label">
              HP
            </div>
            <div className="value">
              170/170
            </div>
          </div>
          <div className="ap">
            <div className="label">
              AP
            </div>
            <div className="value">
              8/8
            </div>
          </div>
          <div className="xp">
            <div className="label">
              XP
            </div>
            <div className="value">
              10/1000
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
