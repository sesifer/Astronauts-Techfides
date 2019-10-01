import React from 'react';
import AddAstronaut from './AddAstronaut';
import Astronaut from './Astronaut';
import './style.css';
import './ListOfAstronauts.css';

class ListOfAstronauts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBeingEdited: false,
            listOfAstronauts: this.props.listOfAstronauts,
            isFormDisplayed: false,
            isRemoveAllBtnDisplayed: true
        };        
    }

    addAstronaut = (event, name, surname, dateOfBirth, superpower) => {
        event.preventDefault();
        this.setState({ showFormAddNewAstronaut: 'hidden' });
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
            allFieldsValid: false,
            isBeingEdited: false,
            isFormDisplayed: false,
            isRemoveAllBtnDisplayed: true
       })
    };

    toggleItemEdit = index => {
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

    handldAstronautUpdate = (event, index) => {
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

    removeAstronaut = index => {
        this.setState({
            listOfAstronauts: [
                ...this.state.listOfAstronauts.slice(0, index),
                ...this.state.listOfAstronauts.slice(index+1) 
            ]
        });
        if (this.state.listOfAstronauts.length === 1) {
            this.setState({isRemoveAllBtnDisplayed: false});
        }
    };

    removeAllListedAstronauts = () => {
        this.setState({
            listOfAstronauts: [],
            isBeingEdited: false,
            isRemoveAllBtnDisplayed: false
        });
    };

    showFormAddNewAstronaut = () => {
        this.setState({isFormDisplayed: true});
    }

    hideFormAddNewAstronaut = () => {
        this.setState({isFormDisplayed: false});
    }

    render() {        
        return(
            <React.Fragment>
                <AddAstronaut
                    onSubmit={this.addAstronaut}
                    isFormDisplayed={this.state.isFormDisplayed}
                    onFormClosure={this.hideFormAddNewAstronaut}
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
                                   toggleEditing = { () => this.toggleItemEdit(index) }
                                   onChange={this.handldAstronautUpdate}
                                   deleteAstronaut={ () => this.removeAstronaut(index) }
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
                        className={`btn-remove-all ${this.state.isRemoveAllBtnDisplayed ? 'show' : 'hidden'}`}
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