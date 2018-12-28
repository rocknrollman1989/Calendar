import React from 'react';

const DaysName = ({props}) => {

    const { dateFns, todayState} = props;

    const weekDaysFormat = 'dddd';
    const weekDaysName = [];

    let startWeek = dateFns.startOfWeek(todayState, {weekStartsOn: 1} );

        for (let i = 0; i < 7; i++){
            weekDaysName.push(
            <div key={i} className='calendar-days-of-the-week-day-name'>
                {dateFns.format(dateFns.addDays(startWeek, i), weekDaysFormat)}
            </div>
            );
        }
    return (
    <div className='calendar-days-of-the-week'>
        {weekDaysName}
    </div>
    );
};

export default DaysName;
