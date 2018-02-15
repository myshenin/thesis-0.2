import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Hello, world!</div>);
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(App);