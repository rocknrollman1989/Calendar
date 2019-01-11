import React from 'react';
import { handleClientLoad } from '../helpers/googleInit';

export default class GoogleInitialComponent extends React.Component{

authGoogle = () => {
    handleClientLoad();
}
    render(){
        return (

            <div className='header-calendar-auth-google'>
                <p>To add events to google calendar press:))</p>
                <button  onClick={this.authGoogle} id="signout_button">Load</button>
            </div>
        );
    }
}
