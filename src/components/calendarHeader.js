import React from 'react';
import GoogleInitialComponent from './googleInitialize';



const CalendarHeader = ({props, clearLocalStorage, searchEvents, addingANewEvent, addAEventToCAlendar}) => {

    const { ourSearchEventsDisplay, searchEvent, shortEventDescr } = props;

    const showSearchEvents = ourSearchEventsDisplay ? ourSearchEventsDisplay.map((item, i)=>{
        return (
            <div key={i} className='calendar-header-events'>
                <p>{item.ourEvent}</p>
                <p>{item.namesOfPeople}</p>
                <p>{item.ourDescription}</p>
                <p>{item.keyDateForUser.slice(0,10)}</p>
            </div>
        );
    })  : null;

    return (
        <div className='calendar-header'>
        <GoogleInitialComponent/>
            <label>
                quick add of event
                <input type="text" value={shortEventDescr} name='shortEventDescr' onChange={(e)=>{addingANewEvent(e);}} placeholder='add date(month-day), event'/>
            </label>
            <button onClick={()=>{addAEventToCAlendar();}}>Add a event!</button>
            <button onClick={()=>{clearLocalStorage();}}>Clear calendar</button>
            <label>
                search Event
                <input type="text" value={searchEvent} name='searchEvent' onChange={(e)=>{searchEvents(e);}}/>
            </label>
            <div className='all-search-events'>
                {showSearchEvents}
            </div>
        </div>
    );
};

export default CalendarHeader;
