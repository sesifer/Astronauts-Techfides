import React from 'react';

import './AddAstronaut.css';

class AddAstronaut extends React.Component {
    render() {
        const { name, surname, dateOfBirth, superpower, onChange, onSubmit, isFormDisplayed, onClick } = this.props;
        return(
            <div className={`form-popup ${isFormDisplayed ? 'show' : 'hidden'}`}>
                <form onSubmit={onSubmit} className="container-form">
                    <h3>New Astronaut</h3>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={onChange}
                        required
                    />    
                
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Enter Surame"
                        value={surname}
                        onChange={onChange}
                        required
                    />
                
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="text"
                        name="dateOfBirth"
                        placeholder="Enter Date of Birth"
                        value={dateOfBirth}
                        onChange={onChange}
                        required
                    />
                
                    <label htmlFor="superpower">Superpower</label>
                    <input
                        type="text"
                        name="superpower"
                        placeholder="Enter Superpower"
                        value={superpower}
                        onChange={onChange}
                        required
                    />
                    <button type="submit" className="btn-submit">Submit</button>
                    <button type="button" className="btn-submit" id="btn-close" onClick={onClick}>Close</button> 
                </form>
            </div>
        )
    }
};

export default AddAstronaut;