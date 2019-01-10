import React from 'react';
import InputPopPup from './inputPopPup';
import { connect } from 'react-redux';
import { validateFormForEvent } from '../helpers/validateForm';
import  OurEventInfo  from './ourEventInfo';
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
        // console.log(events);
        this.setState({ eventsForADay: events});
        // let returnObj = JSON.parse(localStorage.getItem(keyDate));
        // console.log(localStorage)
            // if (returnObj){
            //     this.setState({ ourEvent: returnObj.ourEvent,
            //                     namesOfPeople: returnObj.namesOfPeople,
            //                     ourDescription: returnObj.ourDescription,
            //                     keyDateInfo: keyDate,
            //                     });
            // }
    }

    closePopup = () => {
        this.setState({popupIsOpen: false});
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

    onDeletData = () => {
        const { dateFns, day } = this.props;
        let keyDate = dateFns.format(day,'YYYY-MM-DD');
        let keyDateForUser = dateFns.format(day,'YYYY-MM-DD');
        this.setState({ ourEvent: '',
                        namesOfPeople: '',
                        ourDescription: '',
                        keyDateInfo: '',
                        popupIsOpen: false});
        delete localStorage[keyDate];

        let deleteEvent = {
            keyDateForUser: keyDateForUser
        };
        this.props.deleteEventfromcalendar(deleteEvent);

        return;
    }

    onCorrectData = () => {

        const { ourEvent, namesOfPeople, ourDescription } = this.state;
        const { dateFns, day } = this.props;
        let keyDate = `${dateFns.format(day,'YYYY-MM-DD')}-${new Date().getMilliseconds()}`; // !!!!
        let keyDateForUser = dateFns.format(day,'YYYY-MM-DD');
        this.setState({ ourEvent: ourEvent,
                        namesOfPeople: namesOfPeople,
                        ourDescription: ourDescription,
                        keyDateInfo: keyDate,
                        popupIsOpen: false});

        let saveEventCalendar = {
            ourEvent: ourEvent,
            namesOfPeople: namesOfPeople,
            ourDescription: ourDescription,
            keyDateForUser: keyDateForUser

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
                onDeletData = {this.onDeletData}
                /> : null }
                <div onClick = {statePopupIsOpen ? null : this.openPopup} className='calendare-day-info'>
                   <OurEventInfo eventsForADay={eventsForADay}/>
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
