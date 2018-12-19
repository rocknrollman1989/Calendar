import React from 'react'

 const CalendarSelecter = ({dateFns, prevMonth, nextMonth, todayState}) => {
    const showMonth = dateFns.format(todayState, "MMMM")
    const showYear =  dateFns.format(todayState, "YYYY")

    return(
        <>
            <div className="calendar-months-select">
                <button onClick={() => {prevMonth()}}>prev</button>
                <div><p>{showYear}</p><p>{showMonth}</p></div>
                <button onClick={() => {nextMonth()}}>next</button>
            </div>
        </>
    )
}

export default CalendarSelecter