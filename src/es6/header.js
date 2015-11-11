import React from 'react';

class Header extends React.Component {
  render() {
    return(
        <div className="header">
          <div className="stats">
            <div className="separator left-side">
            </div>
            <div className="title">{this.props.activeCategory.name}</div>
            <div className="separator right-side">
            </div>
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
