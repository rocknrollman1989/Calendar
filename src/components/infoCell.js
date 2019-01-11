import React from 'react';
import OurEventInfo  from './OurEventInfo';
import InputPopPup from './InputPopPup';
import { connect } from 'react-redux';
import { validateFormForEvent } from '../helpers/validateForm';
import { timeId } from '../helpers/timeId';
import { getNewEventForCalendar, deleteEventfromcalendar, openPopupState, closePopupState } from '../actions/actions';

class InfoCell extends React.Component{
    constructor(props){
        super(props);

         this.state = {
            eventsForADay: [],
            ourEvent: '',
            namesOfPeople: '',
            ourDescription: '' ,
            keyDateInfo: '',
            popupIsOpen: false,
            onActiveButton: false,

        };
    }

    componentDidMount = () => {
        const { dateFns, day } = this.props;
        let events = [];
        let keyDate = dateFns.format(day,'YYYY-MM-DD');
        for (let key in localStorage) {
            if (key.indexOf(keyDate) !== -1){
                let returnObj = JSON.parse(localStorage.getItem(key));
                events.push(returnObj);
            }
        }
        this.setState({ eventsForADay: events});
    }

    closePopup = () => {
        this.setState({ ourEvent: '',
                        namesOfPeople: '',
                        ourDescription: '',
                        popupIsOpen: false});
        this.props.closePopupState();
        return;
    }
    openPopup = () => {
        this.setState({popupIsOpen : true });
        this.props.openPopupState();
        return;
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name] : value},
            () => {
                const { ourEvent, ourDescription } = this.state;
                this.setState({onActiveButton:validateFormForEvent(ourEvent, ourDescription)});
        });
    }

    onDeleteData = (event) => {

        delete localStorage[event.keyDateForUser];

        let deleteEvent = {
            keyDateForUser: event.keyDateForUser
        };
        this.props.deleteEventfromcalendar(deleteEvent);
        return;
    }
    correctEvent = (event) => {
        const { ourEvent, namesOfPeople, ourDescription, keyDateForUser } = event;
        let keyDate = keyDateForUser;
        this.props.openPopupState();
        this.setState({ ourEvent: ourEvent,
                        namesOfPeople: namesOfPeople,
                        ourDescription:ourDescription,
                        keyDateInfo: keyDate,
                        popupIsOpen : true,
                        onActiveButton: validateFormForEvent(ourEvent, ourDescription)
                        });
    }

    onCorrectData = () => {

        const { ourEvent, namesOfPeople, ourDescription, keyDateInfo} = this.state;
        const { dateFns, day } = this.props;
        let keyDate = keyDateInfo || `${dateFns.format(day,'YYYY-MM-DD')}-${timeId()}`;
        this.setState({ popupIsOpen: false });

        let saveEventCalendar = {
            ourEvent: ourEvent,
            namesOfPeople: namesOfPeople,
            ourDescription: ourDescription,
            keyDateForUser: keyDate
        };

        let memoryObj = JSON.stringify(saveEventCalendar);
        localStorage.setItem( keyDate , memoryObj );
        this.props.getNewEventForCalendar(saveEventCalendar);
        return;
    }

    render() {

        const { ourDate, statePopupIsOpen } = this.props;
        const { eventsForADay, popupIsOpen } = this.state;

        return (
            <div>
            <span>{ourDate}</span>
                {popupIsOpen ?
                <InputPopPup
                props={this.state}
                closePopup = {this.closePopup}
                onCorrectData = {this.onCorrectData}
                handleChange = {this.handleChange}
                /> : null }
                <div className='calendare-day-info' >
                    <button onClick = {statePopupIsOpen ? null : this.openPopup}>Add event</button>
                    <OurEventInfo eventsForADay={eventsForADay} onDeleteData = {this.onDeleteData} correctEvent={this.correctEvent}/>
                </div>
            </div>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        statePopupIsOpen: state.statePopupIsOpen,
        events: state.events
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

    getNewEventForCalendar: (saveEventCalendar) => (dispatch(getNewEventForCalendar(saveEventCalendar))),
    deleteEventfromcalendar: (deleteEvent) => (dispatch(deleteEventfromcalendar(deleteEvent))),
    openPopupState: () => {dispatch(openPopupState());},
    closePopupState: () => {dispatch(closePopupState());}

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(InfoCell);
