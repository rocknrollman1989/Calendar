import React from 'react';

const OurEventInfo = (props) => {

    const { eventsForADay } = props;
    const eventInADay = eventsForADay.length > 0 ?
    eventsForADay.map((event, i) => {
        return (
            <div className='day-event' id={i}>
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
