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

  setItemActive(i){
    let activecategoryindex = this.state.categories.map((e) => {
      return e.active; 
    }).indexOf(true);

    this.state.categories[activecategoryindex].items.map((c) => {
      c.active = false;
    });
    this.state.categories[activecategoryindex].items[i].active = true;

    this.setState({ categories: this.state.categories });
  }

  render() {
    let activecategory = this.state.categories.filter((category) => { return category.active; })[0];
    return(
      <div className="container">
        <Header activeCategory={activecategory} />
        <MainView setActive={this.setItemActive.bind(this)} activeCategory={activecategory} />
        <Footer setActive={this.setFooterActive.bind(this)} categories={this.state.categories} />
      </div>
    );
  }
}

export default Page;
