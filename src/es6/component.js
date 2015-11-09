import React from 'react';
import Header from './header.js';
import Footer from './footer.js'

class Page extends React.Component {
    render() {
        return(
          <div className="container">
            <Header />
            <div className="main-content">
              <div className="list-view">

              </div>
              <div className="main-view">

              </div>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Page;
