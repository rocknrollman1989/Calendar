import React from 'react'

const CalendarHeader = ({clearLocalStorage, searchEvents, searchEvent, ourSearchEventsDisplay}) => {

    const showSearchEvents = ourSearchEventsDisplay ? ourSearchEventsDisplay.map((item, i)=>{
        return(
            <div key={i} className='calendar-header-events'>
                <p>{item.ourEvent}</p>
                <p>{item.namesOfPeople}</p>
                <p>{item.ourDescription}</p>
                <p>{item.keyDateForUser}</p>
            </div>
        )
    })  : null;

    return(
        <div className='calendar-header'>
            <button onClick={()=>{clearLocalStorage()}}>Clear calendar</button>
            <label>
                search Event
                <input type="text" value={searchEvent} name='searchEvent' onChange={(e)=>{searchEvents(e)}}/>
            </label>
            <div className='all-search-events'>
                {showSearchEvents}
            </div>
        </div>
    )
}

export default CalendarHeader