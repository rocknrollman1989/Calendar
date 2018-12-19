import React from 'react'
import InputPopPup from './inputPopPup'

class InfoCell extends React.Component{
    state = {
        ourEvent: '',
        namesOfPeople: '',
        ourDescription: '' ,
        popupIsOpen: false
    }

    closePopup = () => {
        this.setState({popupIsOpen: false})
    }
    openPopup = () => {
        this.setState({popupIsOpen : true })
    }
    handleChange = (e) => {

        const { value, name } = e.target
        this.setState({[name] : value})

    }
    onDeletData = () => {
        this.setState({ ourEvent: '',
                        namesOfPeople: '',
                        ourDescription: '',
                        popupIsOpen: false})
    }

    onCorrectData = () => {
        this.setState({ ourEvent: this.state.ourEvent,
                        namesOfPeople: this.state.namesOfPeople,
                        ourDescription: this.state.ourDescription,
                        popupIsOpen: false})
            
    }

    render() {

        const { ourDate, day } = this.props
        const { ourEvent, namesOfPeople, ourDescription, popupIsOpen } = this.state
        console.log(this.props)

        return(
            <div >
            <span onClick={this.openPopup}>{ourDate}</span>
                {popupIsOpen?
                <InputPopPup props={this.state}
                closePopup = {this.closePopup} 
                onCorrectData = {this.onCorrectData}
                handleChange = {this.handleChange}
                onDeletData = {this.onDeletData}
                 />: null }
                <div>   
                    <h3>{ourEvent}</h3>
                    <h4>{namesOfPeople}</h4>
                    <p>{ourDescription}</p>
                </div>
            </div>

        )

    }
}

export default InfoCell