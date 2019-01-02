const initState = {
    events: [],
    statePopupIsOpen: false
};

export const rootReduser = (state = initState, action) => {

    // console.log(action)

switch (action.type){
    case 'POPUP_OPEN':
        return {
            ...state,
            statePopupIsOpen: true
        };
    case 'POPUP_CLOSE':
        return {
            ...state,
            statePopupIsOpen: false

        };
    case 'CLEAR_OUR_STORAGE':
        return {
            ...state,
            events: []
        };
    case 'ADD_A_NEW_EVENT_TO_CALENDAR':
        let ourEventsUpload = state.events.filter(
            (event) => { return event.keyDateForUser !== action.data.keyDateForUser; }
        );
        return {
            ...state,
            statePopupIsOpen: false,
            events: [ ...ourEventsUpload, action.data]
        };
    case 'ERROR_A_NEW_EVENT_ADD':
        return {
            ...state
        };
    case 'LOAD_STATE':
        return {
            ...state,
            events: [...state.events, action.event]
        };
    case 'DELETE_OUR_EVENT':
        let ourEvents = state.events.filter(
            (event) => { return event.keyDateForUser !== action.data.keyDateForUser;}
        );
        return {
            ...state,
            events: ourEvents
        };

    default: return state;
    }
};

