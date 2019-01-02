import { dateParse } from './dateParse';
const POPUP_OPEN = 'POPUP_OPEN';
const POPUP_CLOSE = 'POPUP_CLOSE';
const ADD_A_NEW_EVENT_TO_CALENDAR = 'ADD_A_NEW_EVENT_TO_CALENDAR';
const ERROR_A_NEW_EVENT_ADD = 'ERROR_A_NEW_EVENT_ADD';
const DELETE_OUR_EVENT = 'DELETE_OUR_EVENT';
const CLEAR_OUR_STORAGE = 'CLEAR_OUR_STORAGE';
const LOAD_STATE = 'LOAD_STATE';


const myEventsInCalendar = 'myEventsInCalendar';

export const openPopupState = () => {
    return {
        type: POPUP_OPEN
    };
};

export const closePopupState = () => {
    return {
       type: POPUP_CLOSE
    };
};

export const getNewEventForCalendar = (eventInfo) => {

   return  (dispatch, getState, { getFirestore}) => {
    //    call to Firestore
        const firestore = getFirestore();
        firestore.collection(myEventsInCalendar).doc(`${eventInfo.keyDateForUser}`).set({
            ...eventInfo,
        }).then(() => {
            dispatch({ type: ADD_A_NEW_EVENT_TO_CALENDAR, data: eventInfo });
        })
        .catch(
            (error) => {
                dispatch({type: ERROR_A_NEW_EVENT_ADD, data: eventInfo});
                console.log(error);
            }
        );
    };
};
// delete Event from firestore & State
export const deleteEventfromcalendar = (deleteId) => {
    return ( dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection(myEventsInCalendar).doc(`${deleteId.keyDateForUser}`).delete()
        .then(() => {
           dispatch({type: DELETE_OUR_EVENT, data : deleteId });
        })
        .catch(
            (error) => {
                console.log(error);
        });
    };
};
// clear fireStore all
export const clearFirestoreStore = (ourClearStorageInfoKeys) => {
    return ( dispatch, getState, { getFirestore } ) => {
        const firestore = getFirestore();
        ourClearStorageInfoKeys.forEach((info) => {
            firestore.collection(myEventsInCalendar).doc(`${info}`).delete()
            .catch(
                (error) => {
                    console.log(error);
            });
        });
        dispatch({type: CLEAR_OUR_STORAGE});
    };
};
// догружаем отсутствующие события
export const loadEventToFirebase = (eventsArray) => {
    return ( dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        eventsArray.forEach((event) => {
            dispatch({ type: LOAD_STATE, event});
            firestore.collection(myEventsInCalendar).doc(`${event.keyDateForUser}`).set({
                ...event
            })
            .catch((error, message ) => {
                console.log(error, 'это событие не прошло загрузку: ', message );
            });
        });
    };
};
//быстрое добавление события
export const addQuickEventToCAlendar = (addEventData) => {

    let dateEvent = dateParse(addEventData);
    let ourEvent = addEventData.match(/[^\d\- ]/g).join('');

    let saveEventCalendar = {
        ourEvent: ourEvent,
        keyDateForUser: dateEvent,
    };

    let memoryObj = JSON.stringify(saveEventCalendar);
    localStorage.setItem( dateEvent , memoryObj );

    return getNewEventForCalendar(saveEventCalendar);
};
