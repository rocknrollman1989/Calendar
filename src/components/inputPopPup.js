import React from 'react'

const InputPopPup = ({closePopup, onCorrectData, props, handleChange, onDeletData}) => {

    return(
        <div className='popup-container'>
            <form>
                <label >
                Our event
                    <input type="text"
                    name = "ourEvent"
                    value={props.ourEvent} 
                    onChange ={(e)=>{handleChange(e)}} 
                    placeholder="Our event"/>
                </label>
                <label >
                People
                    <input type="text"
                    name = "namesOfPeople"
                    value={props.namesOfPeople} 
                    onChange = {(e)=>{handleChange(e)}}
                    placeholder="People"/>
                </label>
                <label >
                Description
                    <input type="text"
                    name = "ourDescription"
                    value={props.ourDescription} 
                    onChange ={(e)=>{handleChange(e)}}
                    placeholder="Description"/>
                </label>
                {props.ourEvent&&props.ourDescription?<input type="button" onClick={()=>{onDeletData()}} value="delete" /> :null}
                <input type="button" onClick={()=>{onCorrectData()}} disabled={!props.onActiveButton} value="Save" />
            </form>
            <button onClick={()=>{closePopup()} }>Close</button>
        </div> 
        )
    
}

export default InputPopPup