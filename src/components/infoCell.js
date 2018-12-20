import React from 'react'
import InputPopPup from './inputPopPup'

class InfoCell extends React.Component{
    constructor(props){
        super(props)
       
         this.state = {
            ourEvent: '',
            namesOfPeople: '',
            ourDescription: '' ,
            keyDateInfo: '',
            popupIsOpen: false,
            onActiveButton: false,
            ourEventValid: false,
            ourDescriptionValid: false,

        }
    }
    componentDidMount = () => {
        const { dateFns, day } = this.props
        let keyDate = dateFns.format(day,'MDD')
        let returnObj = JSON.parse(localStorage.getItem(keyDate))
            if(returnObj){
                this.setState({ ourEvent: returnObj.ourEvent,
                                namesOfPeople: returnObj.namesOfPeople,
                                ourDescription: returnObj.ourDescription,
                                keyDateInfo: keyDate,
                                })
            }
    }

    closePopup = () => {
        this.setState({popupIsOpen: false})
    }
    openPopup = () => {
        this.setState({popupIsOpen : true })
    }
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({[name] : value},
            () => { this.validateForm(name, value)})
    }

    validateForm = (fieldName, value) => {
    const { ourEvent, ourDescription, ourEventValid, ourDescriptionValid  } = this.state
        
        switch(fieldName){ 

        case 'ourEvent':
            if(ourEvent.length>2){ 
                this.setState({ourEventValid: true})
             }    
             break
        case 'ourDescription':
            if(ourDescription.length>3) { 
                this.setState({ourDescriptionValid: true})
            }
            break
        default: 
        }
       
        if(ourEventValid&&ourDescriptionValid){
           return this.setState({onActiveButton: true})
        
    }
    return
    }

    onDeletData = () => {
        const { dateFns, day } = this.props
        let keyDate = dateFns.format(day,'MDD')
        this.setState({ ourEvent: '',
                        namesOfPeople: '',
                        ourDescription: '',
                        keyDateInfo: '',
                        popupIsOpen: false})
        delete localStorage[keyDate]
        
    }

    onCorrectData = () => {
        const { ourEvent, namesOfPeople, ourDescription } = this.state
        const { dateFns, day } = this.props
        let keyDate = dateFns.format(day,'MDD')
        let keyDateForUser = dateFns.format(day,'M-DD')
        this.setState({ ourEvent: ourEvent,
                        namesOfPeople: namesOfPeople,
                        ourDescription: ourDescription,
                        keyDateInfo: keyDate,
                        popupIsOpen: false})
        
        let saveEventCalendar = {
            ourEvent: ourEvent, 
            namesOfPeople: namesOfPeople, 
            ourDescription: ourDescription,
            keyDateForUser: keyDateForUser
            
        }

        let memoryObj = JSON.stringify(saveEventCalendar)

        localStorage.setItem( keyDate , memoryObj )
    }

    render() {

        const { ourDate } = this.props
        const { ourEvent, namesOfPeople, ourDescription, popupIsOpen } = this.state
        
        return(
            <div>
            <span>{ourDate}</span>
                {popupIsOpen?
                <InputPopPup 
                props={this.state}
                closePopup = {this.closePopup} 
                onCorrectData = {this.onCorrectData}
                handleChange = {this.handleChange}
                onDeletData = {this.onDeletData}
                />: null }
                <div onClick={this.openPopup} className='calendare-day-info'>   
                    <h3>{ourEvent}</h3>
                    <h4>{namesOfPeople}</h4>
                    <p>{ourDescription}</p>
                </div>
            </div>

        )

    }
}

export default InfoCell