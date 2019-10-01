import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import './style.css';

const testData = [
    {
        id: 1,
        name: 'Džu',
        surname: 'Heroin',
        dateOfBirth: '1970-10-28',
        isBeingEdited: false,
        superpower: 'Teleporting'
    },
    {
        id: 2, 
        name: 'Riš', 
        surname: 'Hero', 
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
]

// ========================================
ReactDOM.render(
    <Gallery testData={testData}/>,
    document.getElementById('root')
);