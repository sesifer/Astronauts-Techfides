import React from 'react';
import './AddAstronaut.css';

class AddAstronaut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            dateOfBirth: '',
            superpower:''
        };
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [ name ]: value
        });
    }

    clearForm = () => {
        this.setState({
            name: '',
            surname: '',
            dateOfBirth: '',
            superpower:''
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, surname, dateOfBirth, superpower } = this.state;
        this.props.onSubmit( event, name, surname, dateOfBirth, superpower);
        this.clearForm();
    }

    onFormClosure = () => {
        this.clearForm();
        this.props.onFormClosure();
    }

    render() {
        const { name, surname, dateOfBirth, superpower } = this.state;
        return(
            <div className={`form-popup ${this.props.isFormDisplayed ? 'show' : 'hidden'}`}>
                <form 
                    className="container-form"
                    onSubmit={this.handleSubmit}>
                    <h3>New Astronaut</h3>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />   
                
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Enter Surame"
                        value={surname}
                        onChange={this.handleChange}
                        required
                    />
                
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        placeholder="Enter Date of Birth"
                        value={dateOfBirth}
                        onChange={this.handleChange}
                        required
                    />
                
                    <label htmlFor="superpower">Superpower</label>
                    <input
                        type="text"
                        name="superpower"
                        placeholder="Enter Superpower"
                        value={superpower}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit" className="btn-submit">Submit</button>
                    <button type="button" className="btn-submit" id="btn-close" onClick={this.onFormClosure}>Close</button> 
                </form>
            </div>
        )
    }
};

export default AddAstronaut;