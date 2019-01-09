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
            return false;
           });
      });
    if (value === '') {return false;}
    return ourSearchEvents;
};
