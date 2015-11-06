import React from 'react';

class Page extends React.Component {
    render() {
        return <p>Hello {this.props.name}, how are you! Good.</p>;
    }
}

export default Page;
