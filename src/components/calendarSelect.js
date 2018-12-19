import React from 'react'

 const CalendarSelecter = ({props, prevMonth, nextMonth}) => {
    const { todayDate } = props
    
    const showFormat = 'YYYY - MMMM'

    // console.log(props, prevMonth, nextMonth)

    return(
       

        <>
            <div className="calendar-months-select">
                <button onClick={() => {prevMonth()}}>prev</button>
                <div>{todayDate.format(showFormat)}</div>
                <button onClick={() => {nextMonth()}}>next</button>
            </div>
        </>

    )
}

export default CalendarSelecter