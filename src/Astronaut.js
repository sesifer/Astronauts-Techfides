import React from 'react';
import profile_pic from './astronaut.png';
import './Astronaut.css';

class Astronaut extends React.Component {
    parseDateInput = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    }
    
    render() {
        const { name, surname, dateOfBirth, superpower, isBeingEdited, toggleEditing, onChange, deleteAstronaut, index } = this.props;
        return(
            <div className="profile">
                <img className="profile-pic" src={profile_pic} alt="Avatar"/>
                {isBeingEdited ? 
                /*-------------------EDIT mode---------------------*/
                    <div className="profile-info-edit-mode">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={event => onChange(event, index)}
                            required
                        />
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={surname}
                            onChange={event => onChange(event, index)}
                            required
                        />
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of Birth"
                            value={dateOfBirth}
                            onChange={event => onChange(event, index)}
                            required
                        />
                        <label htmlFor="superpower">Superpower</label>
                        <input
                            type="text"
                            name="superpower"
                            placeholder="Superpower"
                            value={superpower}
                            onChange={event => onChange(event, index)}
                            required
                        />
                    </div>      
                    :
                    /*-------------------DISPLAY mode---------------------*/
                    <div className="profile-info">
                        <p id="nameSurname">{name} {surname}</p>
                        <p>{this.parseDateInput(dateOfBirth)}</p>
                        <p className="superpower">Superpower: {superpower}</p>
                    </div>
                }
                
                <div className="container-btn-profile">
                    {/* EDIT an astronaut button  */}
                    <div
                        className="btn-profile"
                        type="button"
                        onClick={toggleEditing}>
                        <span>{isBeingEdited ? "Save" : "Edit"}</span>
                    </div>
        
                    {/* REMOVE an astronaut button  */}
                    <div
                        className="btn-profile"
                        type="button"
                        onClick={deleteAstronaut}>
                        <span>Remove</span>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Astronaut;