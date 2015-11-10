import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import MainView from './mainView.js';
import Collection from './collection.js'

class Page extends React.Component {
  constructor(){
    super();
    this.state = Collection;
  }
  setFooterActive(i){
    this.state.categories.map((c) => {
      c.active = false;
    });
    this.state.categories[i].active = true;

    this.setState({ categories: this.state.categories });
  }
  render() {
      return(
        <div className="container">
          <Header />
          <MainView />
          <Footer setActive={this.setFooterActive.bind(this)} categories={this.state.categories} />
        </div>
      );
  }
}

export default Page;
