import { timeId, timeIdYear } from './timeId';

export const validateFormForEvent = (ourEvent, ourDescription) => {
    let onActiveButton = false;

    if (ourEvent.length > 3 && ourDescription.length > 5){
        onActiveButton = true;
    }
return onActiveButton;
};

export const searchOurEvents = (value, events) =>{

  const ourSearchEvents = [];

  const regExpToFind = new RegExp(value.replace(/[.{}()[\]?*+^$]/, '\\\\$1'), 'gmi');
    events.filter((item) => {
        return Object.keys(item).some((key) => {
            if (regExpToFind.test(item[key])){
               return ourSearchEvents.push(item);
              }
            return ourSearchEvents;
           });
      });
    if (value === '') {return false;}
    return ourSearchEvents;
};
export const quickAddEventOnActive = (state) => {
    const { ourDayDate, ourMonthDate, ourEventToAdd } = state;

    let ourDayDateValid = false;
    let ourMonthDateValid = false;
    let ourEventToAddValid = false;

    if ( ourDayDate.length >= 1 && ourDayDate !== ' '){
        ourDayDateValid = true;
    }
    if ( ourMonthDate.length >= 1 && ourMonthDate !== ' '){
        ourMonthDateValid = true;
    }
    if ( ourEventToAdd.length >= 1 &&  ourMonthDate !== ' '){
        ourEventToAddValid = true;
    }

    if ( !!ourDayDateValid && ourMonthDateValid && ourEventToAddValid ){
        return false;
    }
    return true;
};

export const quickAddEventValidation = (refs, state, name) => {
const { ourDayDate, ourMonthDate } = state;

    if (isNaN(ourDayDate) || isNaN(ourMonthDate)){
        return 'ВВедите число!';
    }
    switch (name){
        case 'ourDayDate':
        if ( ourDayDate.length === 2 ){
                refs.ourMonthDate.focus();
            }
        break;
        case 'ourMonthDate':
        if ( ourMonthDate.length === 2 ){
                refs.ourEventToAdd.focus();
            }
        break;
    default: return;
        }

};

export const dateParse = (date, month) => {
    let dataTimeToFind;
    let ourDate = parseFloat(date);
    let ourMonth = parseFloat(month);
    if (ourDate <= 9){
        ourDate = `0${ourDate}`;
    }
    if (ourMonth <= 9){
        ourMonth = `0${ourMonth}`;
    }
    dataTimeToFind = `${timeIdYear()}-${ourMonth}-${ourDate}-${timeId()}`;
    return dataTimeToFind;
 };
