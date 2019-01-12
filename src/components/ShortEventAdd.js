import React from 'react';
import { connect } from 'react-redux';
import { quickAddEventValidation, quickAddEventOnActive } from '../helpers/validateForm';
import { addQuickEventToCAlendar } from '../actions/actions';


class ShortEventAdd extends React.Component{
    state = {
        ourDayDate: '',
        ourMonthDate: '',
        ourEventToAdd: '',
        error: '',
        isActive: true
    }

    inputOnChange = (e) =>{
        const { value, name } = e.target;
        this.setState({[name]: value},
            () => {
                this.setState({ error: quickAddEventValidation(this.refs, this.state, name),
                                isActive: quickAddEventOnActive(this.state)}); });
      }

    addAEventToCAlendar = (event) => {
        event.preventDefault();
        const { ourDayDate, ourMonthDate, ourEventToAdd } = this.state;
            let eventToAdd = {
                ourDayDate, ourMonthDate, ourEventToAdd
            };
        this.props.addQuickEventToCAlendar(eventToAdd);
        this.setState({ ourDayDate: '',
                        ourMonthDate: '',
                        ourEventToAdd: '',
                        error: '',
                        isActive: true });

        return;
      }
    render() {

        return (
        <div className="quick-add-header">
            <div className='quick-add-header-message'>
                <p>Add your event easy!:)</p>
                <p className='error'>{this.state.error}</p>
            </div>
            <form>
                <label>
                    <input type="text" value={this.state.ourDayDate} maxLength={2} name='ourDayDate' ref='ourDayDate' onChange={this.inputOnChange} placeholder='date' style={{width: '50px'}}/>
                </label>
                <label>
                    <input type="text" value={this.state.ourMonthDate} maxLength={2} name='ourMonthDate' ref='ourMonthDate' onChange={this.inputOnChange} placeholder='month' style={{width: '50px'}}/>
                </label>
                <label>
                    <input type="text" value={this.state.ourEventToAdd}  name='ourEventToAdd' ref='ourEventToAdd' onChange={this.inputOnChange} placeholder='event'/>
                </label>
                <button onClick={this.addAEventToCAlendar} disabled={this.state.isActive}>Add a event!</button>
            </form>
        </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
      addQuickEventToCAlendar: (addEventData) => {dispatch(addQuickEventToCAlendar(addEventData));},
    };
  };

export default connect( null, mapDispatchToProps )(ShortEventAdd);

