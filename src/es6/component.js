import React from 'react';
import Header from './header.js';
import Footer from './footer.js'

class Page extends React.Component {
    render() {
        return(
          <div className="container">
            <Header />

            <Footer />
          </div>
        );
    }
}

export default Page;
