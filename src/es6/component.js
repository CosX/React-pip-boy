import React from 'react';

class Page extends React.Component {
    render() {
        return <p>Hello {this.props.name}!</p>;
    }
}

export default Page;
