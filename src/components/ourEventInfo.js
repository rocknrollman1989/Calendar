import React from 'react';

const OurEventInfo = ({eventsForADay, onDeleteData, correctEvent}) => {

    const eventInADay = eventsForADay.length > 0 ?
    eventsForADay.map((event, i) => {
        return (
            <div className='day-event' key={i}>
                <button onClick={() => {onDeleteData(event);}}>delete</button>
                <button onClick={() => {correctEvent(event);}}>correct</button>
                <h3>{event.ourEvent}</h3>
                <h4>{event.namesOfPeople}</h4>
                <p>{event.ourDescription}</p>
            </div>
        );
    })
    : null;

    return (
    <>
        {eventInADay}
    </>
    );
};

export default OurEventInfo;
