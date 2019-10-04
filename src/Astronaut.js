import React from 'react';
import profile_pic from './astronaut.png';
import './Astronaut.css';

class Astronaut extends React.Component {
    parseDateInput = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    };

    /* get the current date for the maximum for the date input below */
    componentDidMount = () => {
        var date = new Date().getDate(); 
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var myDateString;
            
        myDateString = year + '-'
             + ('0' + month).slice(-2) + '-'
             + ('0' + date).slice(-2);
        return(myDateString);
    };
    
    render() {
        const { name, surname, dateOfBirth, superpower, isBeingEdited, toggleEditing, onChange, deleteAstronaut, index } = this.props;
        return(
            <div className={`profile ${this.props.isBeingEdited ? 'profile-edit-mode' : ''}`}>
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
                            min="1900-01-01"
                            max={this.componentDidMount()}
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