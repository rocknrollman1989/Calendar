


export const getNewEventForCalendar = (eventInfo) => {
   return  (dispatch, getState, {getFirebase, getFirestore}) => {
    //    call to Firestore
        const firestore = getFirestore();
       
        firestore.collection('myEventsInCalendar').doc(`${eventInfo.keyDateForUser}`).set({
            ...eventInfo,

        }).then(() => {
            dispatch({ type: "ADD_A_NEW_EVENT_TO_CALENDAR", data: eventInfo })
        })
        .catch(
            (error) => {
                dispatch({type: 'ERROR_A_NEW_EVENT_ADD', data: eventInfo})
                console.log(error)
            }
        )
    }
}

export const deleteEventfromcalendar = (deleteId) => {
    return ( dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        console.log(deleteId)
        firestore.collection('myEventsInCalendar').doc(`${deleteId.keyDateForUser}`).delete()
        .then( 
           () => { 
               dispatch({type: 'DELETE_OUR_EVENT', data : deleteId })
               console.log('It"s ok ')
          })
        .catch(
            (error) => {
                console.log(error)
            } )
   
            
        // firestore.collection('myEventsInCalendar')
        // console.log( firestore.collection('myEventsInCalendar').where( 'keyDateForUser' , '==' , '12-22'))
        


    }
}