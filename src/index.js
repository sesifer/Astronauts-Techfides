import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import './style.css';

const testData = [
    {
        id: 1,
        name: 'Džu',
        surname: 'Heroin',
        dateOfBirth: '28 Sep 1970',
        isBeingEdited: false,
        superpower: 'Teleporting'
    },
    {
        id: 2, 
        name: 'Riš', 
        surname: 'Hero', 
        dateOfBirth: '16 Oct 1977',
        isBeingEdited: false,
        superpower: 'Laser Eyes'
    },
    {
        id: 3,
        name: 'Teodora', 
        surname: 'Brčouš', 
        dateOfBirth: '01 Jan 2000',
        isBeingEdited: false,
        superpower: 'Crazy Hair'
    },
]

// ========================================
ReactDOM.render(
    <Gallery testData={testData}/>,
    document.getElementById('root')
);