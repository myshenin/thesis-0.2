import React from 'react';
import {connect} from 'react-redux';
import LocationMap from "../components/LocationMap";
import chooseLocation from "../redux/reducers/location/actions/chooseLocation";
import MobileTabs from "../components/MobileTabs";
import changeTab from "../redux/reducers/tabs/actions/changeTab";
import PeriodsPicker from "../components/PeriodsPicker";
import setStartDate from "../redux/reducers/periods/actions/setStartDate";
import setEndDate from "../redux/reducers/periods/actions/setEndDate";
import StartButton from "../components/StartButton";
import getData from "../redux/reducers/weather/actions/getData";

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;

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
        if (parseInt(window.innerWidth) < 768) {
            this.props.changeTab([true, false, false]);
        } else {
            this.props.changeTab([true, true, true]);
        }

        window.addEventListener("resize", () => {
            if ((parseInt(window.innerWidth) < 768)) {
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
                {this.props.tabs[1] && <PeriodsPicker
                    setStartDate={this.props.setStartDate}
                    setEndDate={this.props.setEndDate}
                    periods={this.props.periods}
                />}
                <StartButton
                    getData={this.props.getData}
                    location={this.props.location}
                    periods={this.props.periods}
                />
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
        periods: state.periods,
        weather: state.weather
    };
};

const mapDispatchToProps = dispatch => {
    return {
        chooseLocation: (payload) => {
            dispatch(chooseLocation(payload));
        },
        changeTab: (payload) => {
            dispatch(changeTab(payload));
        },
        setStartDate: (payload) => {
            dispatch(setStartDate(payload));
        },
        setEndDate: (payload) => {
            dispatch(setEndDate(payload));
        },
        getData: (payload) => {
            dispatch(getData(payload));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);