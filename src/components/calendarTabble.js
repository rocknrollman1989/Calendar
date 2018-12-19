import React from 'react'
import moment from 'moment'


export default class CalendarTabble extends React.Component{


render() {

    const { moment, weekDays } = this.props
    let day = 0;
    let lastDayOfMonth = moment.endOf('month').format('DD')
    let firstDayOfMonth = moment.startOf('month').add(day, 'day').format('D')
    
    console.log(firstDayOfMonth, lastDayOfMonth)
    
    let rows = [];
    let days = [];

    while (day<=lastDayOfMonth){

        for(let i=0; i<7; i++){
            console.log(day)
            days.push(
                <td key={day}>{day}</td>
            )
            day++;
        }
        rows.push(
            <tr key={day}>{days}</tr>
        )
        days  = []
    }


    // const weekDay = weekDays.map((day) => {
    //     return(
    //         <td key={day}>{day}</td>
    //     )
    // })

  

    return(
        <>
        <table>
            <tbody>
                {/* <tr>
                {weekDay}
                </tr> */}
                {rows}
            </tbody>
        </table>
        </>
    )
}

}