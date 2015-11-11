import React from 'react';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      datavalue: ''
    };
  }
  componentDidMount(){
    this.updateDatavalue();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.datavalue === this.state.datavalue){
      this.updateDatavalue();
    }
  }

  updateDatavalue(){
    let activeitem = this.props.activeCategory.items.filter((item) => { return item.active; })[0];
    let self = this;
    activeitem.generateData().then((datavalue) => {
      self.setState({datavalue: datavalue});
    });
  }
  render() {

    let activeitem = this.props.activeCategory.items.filter((item) => { return item.active; })[0];
    return(
      <div className="main-content">
        <div className="list-view">
          <ul>
            {this.props.activeCategory.items.map((item, index) => {
              let setActive = this.props.setActive.bind(this, index);
              return <li onClick={setActive} className= {item.active ? 'active menu-option' : 'menu-option'}>{item.displayName}</li>
            })}
          </ul>
        </div>
        <div className="main-view">
          <div className="container-main">
            <div className="center">
              <div className="title">{activeitem.displayName}</div>
              <div className="value">{this.state.datavalue}</div>
            </div>
          </div>
          <div className="description">{activeitem.dataDescription}</div>
        </div>
      </div>
    );
  }
}

export default MainView;
