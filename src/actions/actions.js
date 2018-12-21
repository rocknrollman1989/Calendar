


export const getNewEventForCalendar = (eventInfo) => {
   return  (dispatch, getState, {getFirebase, getFirestore}) => {
    //    call to Firestore
    // console.log({getFirebase, getFirestore})
        const firestore = getFirestore();
        console.log(getFirestore)
        firestore.collection('myEventsInCalendar').add({
            ...eventInfo,
            createdAt: new Date()
        }).then(() => {
            console.log(eventInfo)
            dispatch({ type: "ADD_A_NEW_EVENT_TO_CALENDAR", ...eventInfo })
        })
    }
}