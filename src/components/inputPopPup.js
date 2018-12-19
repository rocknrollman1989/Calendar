import React from 'react'

class InputPopPup extends React.Component{
    state = {
        ourAction: '',
        namesOfPeople: '',
        ourDescription: '',
        popupIsOpen: false
    }

closePopup = () => {
this.setState({popupIsOpen : false})
}


render(){
  const{ popupIsOpen } = this.state

    return(
        {popupIsOpen}?<div className='popup-container'>

             <h2>Тута</h2>   
             <button onClick={this.closePopup}>Close</button>
        </div> : null 
        )
    }
}

export default InputPopPup