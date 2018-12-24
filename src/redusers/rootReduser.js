const initState = {
    events: []
}

export const rootReduser = (state = initState, action) => {
    console.log(action)
    console.log(state)
switch(action.type){
    case 'ADD_A_NEW_EVENT_TO_CALENDAR':
        return {
            ...state,
            events: [ ...state.events ,action.data]
        }
        
    case 'ERROR_A_NEW_EVENT_ADD':
        return{
            ...state
        }
    case 'DELETE_OUR_EVENT':
        let ourEvents = state.events.filter(
            (event) => { return event.keyDateForUser !== action.data }
        )
        console.log(ourEvents)
        return{
            ...state,
            events: ourEvents
        }

    default: return state
    }
}

