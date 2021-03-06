import React from 'react';

const InputPopPup = ({closePopup, onCorrectData, props, handleChange}) => {

    return (
        <div className='popup-container'>
            <p>Add new event</p>
            <form>
                <label >
                Our event
                    <input type="text"
                    name = "ourEvent"
                    value={props.ourEvent}
                    onChange ={(e)=>{handleChange(e);}}
                    placeholder="Our event"/>
                </label>
                <label >
                People
                    <input type="text"
                    name = "namesOfPeople"
                    value={props.namesOfPeople}
                    onChange = {(e)=>{handleChange(e);}}
                    placeholder="People"/>
                </label>
                <label >
                Description
                    <input type="text"
                    name = "ourDescription"
                    value={props.ourDescription}
                    onChange ={(e)=>{handleChange(e);}}
                    placeholder="Description"/>
                </label>
                <input type='button' onClick={()=>{onCorrectData();}} disabled={!props.onActiveButton} value='Save' className='input-add-event'/>
            </form>
            <button onClick={()=>{closePopup();}}>Close</button>
        </div>
        );
};

export default InputPopPup;
