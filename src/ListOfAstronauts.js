import React from 'react';
import AddAstronaut from './AddAstronaut';
import Astronaut from './Astronaut';

import './style.css';
import './ListOfAstronauts.css';

class ListOfAstronauts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            dateOfBirth: '',
            superpower: '',
            isBeingEdited: false,
            listOfAstronauts: this.props.listOfAstronauts,
            isFormDisplayed: false
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

    addItem = event => {
        event.preventDefault();
        this.setState({ showFormAddNewAstronaut: 'hidden' });
        const { name, surname, dateOfBirth, superpower } = this.state;
        const astronautsInState = this.state.listOfAstronauts;
        const astronautsArrayLenght = this.state.listOfAstronauts.length;
        const id = astronautsArrayLenght ? (astronautsInState[astronautsArrayLenght - 1].id + 1) : 1;
        this.setState({
            listOfAstronauts: [
                ...astronautsInState,
                Object.assign({}, {
                    id,
                    name,
                    surname,
                    dateOfBirth,
                    superpower
                })
            ],
            name: '',
            surname: '',
            dateOfBirth: '',
            superpower: '',
            isBeingEdited: false,
            isFormDisplayed: false
       })

       return(
        <AddAstronaut 
                name={name}
                surname={surname}
                dateOfBirth={dateOfBirth}
                superpower={superpower}
                onChange={this.handleChange}
                onSubmit={this.addItem}
                />
        ); 
    };

    toggleItemEditing = index => {
        this.setState({
            listOfAstronauts: this.state.listOfAstronauts.map((astronaut, astronautIndex) => {
                if (astronautIndex === index) {
                    return {
                        ...astronaut,
                        isBeingEdited: !astronaut.isBeingEdited
                    }
                }
                return astronaut;
            })
        });
    };

    handleItemUpdate = (event, index) => {
        const target = event.target;
        const value  = target.value;
        const name = target.name;
        this.setState({
            listOfAstronauts: this.state.listOfAstronauts.map((astronaut, astronautIndex) => {
                if(astronautIndex===index) {
                    return{
                    ...astronaut,
                        [name]: value
                    }
                }
                return astronaut;
            })
        });
    };

    handleRemoval = index => {
        this.setState({
            listOfAstronauts: [
                ...this.state.listOfAstronauts.slice(0, index),
                ...this.state.listOfAstronauts.slice(index+1) 
            ]
        });
    };

    removeAllListedAstronauts = () => {
        const { name, surname, dateOfBirth, superpower } = this.state;

        this.setState({
            listOfAstronauts: [],
            name: '',
            surname: '',
            dateOfBirth: '',
            superpower: '',
            isBeingEdited: false
        });

        return(
            <AddAstronaut 
                    name={name}
                    surname={surname}
                    dateOfBirth={dateOfBirth}
                    superpower={superpower}
                    onChange={this.handleChange}
                    onSubmit={this.addItem}
                    onClick={this.hideFormAddNewAstronaut}
                    />
        ); 
    };

    showFormAddNewAstronaut = () => {
        this.setState({isFormDisplayed: true});
    }

    hideFormAddNewAstronaut = () => {
        this.setState({isFormDisplayed: false});
    }

    render() {
        const { name, surname, dateOfBirth, superpower, isFormDisplayed } = this.state;
        
        return(
            <React.Fragment>
                <AddAstronaut 
                    name={name}
                    surname={surname}
                    dateOfBirth={dateOfBirth}
                    superpower={superpower}
                    onChange={this.handleChange}
                    onSubmit={this.addItem}
                    isFormDisplayed={isFormDisplayed}
                    onClick={this.hideFormAddNewAstronaut}
                />
                <div className="listOfAstronauts">
                    {
                        this.state.listOfAstronauts.map( 
                            (astronaut, index) => 
                               <Astronaut 
                                   key= {astronaut.id}
                                   index={index}
                                   name={astronaut.name}
                                   surname={astronaut.surname}
                                   dateOfBirth={astronaut.dateOfBirth}
                                   superpower={astronaut.superpower}
                                   isBeingEdited={astronaut.isBeingEdited}
                                   toggleEditing = { () => this.toggleItemEditing(index) }
                                   onChange={this.handleItemUpdate}
                                   onDelete={ () => this.handleRemoval(index) }
                               />)
                    }
                </div>
                <div className="container-btn-gallery">
                    <div
                        className="btn-add-new"
                        type="button"
                        onClick={this.showFormAddNewAstronaut}>
                        <span>Add new</span>
                    </div>
                    <div
                        className="btn-remove-all"
                        type="button"
                        onClick={ () => this.removeAllListedAstronauts() }>
                        <span>Remove all</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}        

export default ListOfAstronauts;