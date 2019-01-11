import { API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPES} from '../config/google_const';
const gapi = window.gapi;

export const initClient = () => {

        gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES

    }).then(function () {
      // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function(error) {
       console.log(JSON.stringify(error, null, 2));
    });
  };

const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
        listUpcomingEvents();
    } else {
    console.log('!!!');
    }
};

function listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {

      someNew();

    });
  }

export const handleClientLoad = () => {

    window.gapi.load('client:auth2', initClient);
};

function someNew(){

for (let i = 0; i < localStorage.length; i++){
let key = localStorage.key(i);
let returnObj = JSON.parse(localStorage.getItem(key));

        let event = {
            'summary': returnObj.ourEvent || '' ,
            'location': 'Там дэ нас нэма',
            'description':  returnObj.ourDescription || '' ,
            'start': {
            'date': returnObj.keyDateForUser.slice(0, 10),
            },
            'end': {
            'date': returnObj.keyDateForUser.slice(0,10)
            },
        };
    var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
    });
}
request.execute(function(event) {
// ('Event created: ' + event.htmlLink);
});
}
