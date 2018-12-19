import React from 'react'
import InputPopPup from './inputPopPup'

class InfoCell extends React.Component{
    state = {
        ourAction: '',
        namesOfPeople: '',
        ourDescription: '' 
    }

    componentDidMount = () => {
       
    }

    render() {

        const { ourDate, day } = this.props
        const { ourAction, namesOfPeople,ourDescription } = this.state

        return(
            <div >
                <InputPopPup/>
                <span>{ourDate}</span>
                <div>   
                    <h3>{ourAction}</h3>
                    <h4>{namesOfPeople}</h4>
                    <p>{ourDescription}</p>
                </div>

            </div>

        )

    }
}

export default InfoCell