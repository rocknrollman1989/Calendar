export const dateParse = (addEvent) => {
    let addEventDate = addEvent;
    let ourNambersToFind = addEventDate.split('', 5);
    ourNambersToFind[4] = ' ';
    // находим числа
    let ourNumbersForDate = ourNambersToFind.filter( (elem) => {
        if (elem === ' ') {
            return null;
        }
        return !isNaN(elem);
    });

   return setADate(ourNumbersForDate);
};

const setADate = (ourNumbersForDate) => {
    let day, month, year;
    if (ourNumbersForDate.length === 1 || ourNumbersForDate.length === 0 ){
        return  'Date not found';
    }
    if ( ourNumbersForDate.length === 2 ){
        ourNumbersForDate.splice(1, 0 , '0');
        ourNumbersForDate.splice(0, 0 , '0');
    }
    if ( ourNumbersForDate.length === 3 ){
        ourNumbersForDate.splice(0, 0 , '0');
    }
    month = ourNumbersForDate[0] + ourNumbersForDate[1];
    day = ourNumbersForDate[2] + ourNumbersForDate[3];
    year = new Date().getFullYear();
    return  `${year}-${month}-${day}`;
};
