import React from 'react'
import InfoCell from './infoCell'

 const CalendarTabble = ({dateFns, todayState}) => {

    const weekDaysFormat = 'dddd'
    const weekDaysName = []

    const DaysName = () => {

        let startWeek = dateFns.startOfWeek(todayState, {weekStartsOn: 1})

            for(let i=0; i<7; i++){ 
                weekDaysName.push(
                <td key={i}>
                    {dateFns.format(dateFns.addDays(startWeek, i), weekDaysFormat)} 
                </td>
                )
            }
        return (
            <tr>{weekDaysName}</tr>
        )
    }


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
                <td key={day} >
                  <InfoCell ourDate={ourDate} dateFns={dateFns} day={day}/>
                </td>
              );
              day = dateFns.addDays(day, 1);
            }
            rows.push(
            <tr  key={day}>{days}</tr>  
                );
            days = [];
          }

        return rows
    }
        return(
            <>
            <table className='calendar_days'>
                <tbody>
                    <DaysName/>
                    <CalendarTable/>
                </tbody>
            </table>
            </>
        )
}

export default CalendarTabble
