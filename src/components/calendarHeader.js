import React from 'react';
import GoogleInitialComponent from './GoogleInitialize';
import ShortEventAdd from './ShortEventAdd';



const CalendarHeader = ({props, clearLocalStorage, searchEvents }) => {

    const { ourSearchEventsDisplay, searchEvent } = props;

    const showSearchEvents = ourSearchEventsDisplay ? ourSearchEventsDisplay.map((item, i)=>{
        return (
            <div key={i} className='calendar-header-events'>
                <p>{item.ourEvent}</p>
                <p><span>Who:</span>{item.namesOfPeople}</p>
                <p><span>What:</span>{item.ourDescription}</p>
                <p><span>When:</span>{item.keyDateForUser.slice(0,10)}</p>
            </div>
        );
    })  : null;

    return (
        <div className='calendar-header'>
            <GoogleInitialComponent/>
            <ShortEventAdd/>
            <div className='header-search-block'>
                <button onClick={()=>{clearLocalStorage();}}>Clear calendar</button>
                <label>
                    search Event
                    <input type="text" value={searchEvent} name='searchEvent' onChange={(e)=>{searchEvents(e);}}/>
                </label>
                <div className='all-search-events'>
                    {showSearchEvents}
                </div>
            </div>
        </div>
    );
};

export default CalendarHeader;
