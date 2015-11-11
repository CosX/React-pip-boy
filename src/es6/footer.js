import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <div className="footer">
        <div className="container-bottom">
          <div className="separator left-side"></div>
          {this.props.categories.map((category, index) => {
            let setActive = this.props.setActive.bind(this, index);
            return <div onClick={setActive} className= {category.active ? 'active menu-option' : 'menu-option'}>{category.name}</div>
          })}
          <div className="separator right-side"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
