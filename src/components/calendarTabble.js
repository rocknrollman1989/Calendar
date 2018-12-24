import React from 'react'
import InfoCell from './infoCell'
import DaysName from './daysOfTheWeek'

 const CalendarTabble = ({dateFns, todayState}) => {

    const monthStart = dateFns.startOfMonth(todayState)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn: 1})
    const endDate = dateFns.endOfWeek(monthEnd)

    const dateFormat = 'D'
    const rows = []

    let days = [];
    let day = startDate;
    let ourDate = "";

    const CalendarTable = () =>{

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
              ourDate = dateFns.format(day, dateFormat);
              days.push(
                <div className='day' key={day} >
                  <InfoCell ourDate={ourDate} dateFns={dateFns} day={day}/>
                </div>
              );
              day = dateFns.addDays(day, 1);
            }
            rows.push(
            <div  key={day} className='calendar-week'>{days}</div>  
                );
            days = [];
          }

        return rows
    }



        return(
            <>
            <div className='calendar_days'>
                <DaysName props={{dateFns, todayState}}/>
                <CalendarTable/>
            </div>
            </>
        )
}

export default CalendarTabble
