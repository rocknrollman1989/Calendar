import React from 'react'

class InfoCell extends React.Component{
    state = {
        ourAction: '',
        namesOfPeople: '',
        ourDescription: '' 

    }
    render() {

        const { ourDate, day } = this.props
        const { ourAction, namesOfPeople,ourDescription } = this.state

        // console.log(day)

        return(
            <div>
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