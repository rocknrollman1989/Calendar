const initState = {
    events: []
}

export const rootReduser = (state = initState, action) => {
    // console.log(action)
switch(action.type){
    case 'ADD_A_NEW_EVENT_TO_CALENDAR':
        let ourEventsUpload = state.events.filter(
            (event) => { return event.keyDateForUser !== action.data.keyDateForUser }
        )
        return {
            ...state,
            events: [ ...ourEventsUpload, action.data]
        }
        
    case 'ERROR_A_NEW_EVENT_ADD':
        return{
            ...state
        }
    case 'LOAD_STATE':
        return{
            events: [...state.events, action.event] 
        }
    case 'DELETE_OUR_EVENT':
        let ourEvents = state.events.filter(
            (event) => { return event.keyDateForUser !== action.data.keyDateForUser }
        )
        return{
            ...state,
            events: ourEvents
        }

    default: return state
    }
}

