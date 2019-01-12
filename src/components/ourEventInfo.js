import React from 'react';
import logoCorrect from '../static/../static/correctPen.png';
import logoDelete from '../static/delete_cross.png';

const OurEventInfo = ({eventsForADay, onDeleteData, correctEvent}) => {

    const eventInADay = eventsForADay.length > 0 ?
    eventsForADay.map((event, i) => {
        return (
            <div className='day-event' key={i}>
                <button onClick={() => {onDeleteData(event);}}><img src={logoDelete} alt="Delete"/></button>
                <button onClick={() => {correctEvent(event);}}><img src={logoCorrect} alt="Correct"/></button>
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
