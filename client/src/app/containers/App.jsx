import React from 'react';
import {connect} from 'react-redux';
import LocationMap from "../components/LocationMap";
import chooseLocation from "../redux/reducers/location/actions/chooseLocation";
import MobileTabs from "../components/MobileTabs";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <LocationMap
                    chooseLocation={this.props.chooseLocation}
                    location={this.props.location}
                />
                <MobileTabs/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {location: state.location};
};

const mapDispatchToProps = dispatch => {
    return {
        chooseLocation: (payload) => {
            dispatch(chooseLocation(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);