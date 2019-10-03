import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import './style.css';

const testData = [
    {
        id: 1,
        name: 'Amanda',
        surname: 'White',
        dateOfBirth: '1970-10-28',
        isBeingEdited: false,
        superpower: 'Teleporting'
    },
    {
        id: 2, 
        name: 'Richard', 
        surname: 'Astronaut', 
        dateOfBirth: '1977-10-17',
        isBeingEdited: false,
        superpower: 'Laser Eyes'
    },
    {
        id: 3,
        name: 'Teodora', 
        surname: 'Brčouš', 
        dateOfBirth: '2000-01-01',
        isBeingEdited: false,
        superpower: 'Crazy Hair'
    },
    {
        id: 4,
        name: 'Adam', 
        surname: 'Smith', 
        dateOfBirth: '1950-01-01',
        isBeingEdited: false,
        superpower: 'Invisibility'
    },
    {
        id: 5,
        name: 'Beth', 
        surname: 'Jones', 
        dateOfBirth: '1951-01-01',
        isBeingEdited: false,
        superpower: 'Fire'
    },
    {
        id: 6,
        name: 'Will', 
        surname: 'Wilson', 
        dateOfBirth: '1943-01-01',
        isBeingEdited: false,
        superpower: 'Immportality'
    },
    {
        id: 7,
        name: 'Zena', 
        surname: 'Zolt', 
        dateOfBirth: '1955-01-01',
        isBeingEdited: false,
        superpower: 'Telepathy'
    },
    {
        id: 8,
        name: 'Peter', 
        surname: 'Path', 
        dateOfBirth: '1986-01-01',
        isBeingEdited: false,
        superpower: 'Strength'
    },
    {
        id: 9,
        name: 'Ivy', 
        surname: 'Terry', 
        dateOfBirth: '1960-01-01',
        isBeingEdited: false,
        superpower: 'X-ray vision'
    }
]

// ========================================
ReactDOM.render(
    <Gallery testData={testData}/>,
    document.getElementById('root')
);