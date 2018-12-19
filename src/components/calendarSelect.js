import React from 'react'

 const CalendarSelecter = ({dateFns, prevMonth, nextMonth, todayState}) => {
    const showFormat = 'YYYY - MMMM'
 

    return(
        <>
            <div className="calendar-months-select">
                <button onClick={() => {prevMonth()}}>prev</button>
                <div> {dateFns.format(todayState, showFormat)}</div>
                <button onClick={() => {nextMonth()}}>next</button>
            </div>
        </>
    )
}

export default CalendarSelecter