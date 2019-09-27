import React from 'react';
import profile_pic from './astronaut.png';
import './Astronaut.css';

const Astronaut = ({name, surname, dateOfBirth, superpower, isBeingEdited, toggleEditing, onChange, onDelete, index}) => (
    <div className="profile">
        <img className="profile-pic" src={profile_pic} alt="Avatar"/>
        {isBeingEdited ? 
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
                    type="text"
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
            <div className="profile-info">
                <p id="nameSurname">{name} {surname}</p>
                <p>{dateOfBirth}</p>
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
                onClick={onDelete}>
                <span>Remove</span>
            </div>
        </div>
    </div>    
);

export default Astronaut;