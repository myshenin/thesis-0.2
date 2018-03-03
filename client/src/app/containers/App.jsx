import React from 'react';
import {connect} from 'react-redux';
import LocationMap from "../components/LocationMap";
import chooseLocation from "../redux/reducers/location/actions/chooseLocation";
import MobileTabs from "../components/MobileTabs";
import changeTab from "../redux/reducers/tabs/actions/changeTab";

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener("resize", () => {
            if ((parseInt(window.innerWidth) < 768)){
                if (arraysEqual(this.props.tabs, [true, true, true])) {
                    this.props.changeTab([true, false, false]);
                }
            } else {
                this.props.changeTab([true, true, true]);
            }
        });
    }

    render() {
        return (
            <div className="container">
                {this.props.tabs[0] && <LocationMap
                    chooseLocation={this.props.chooseLocation}
                    location={this.props.location}
                />}
                <MobileTabs
                    changeTab={this.props.changeTab}
                    tabs={this.props.tabs}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        location: state.location,
        tabs: state.tabs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        chooseLocation: (payload) => {
            dispatch(chooseLocation(payload));
        },
        changeTab: (payload) => {
            dispatch(changeTab(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);