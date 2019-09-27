import React from 'react';
import ListOfAstronauts from './ListOfAstronauts';
import Intro from './Intro';

import './Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIntroShowed: true
        }
    }

    handleClick = () => {
        this.setState({isIntroShowed: false});
    }

    render() {
        return(
            <div className='background'>
                <Intro 
                    isIntroShowed={this.state.isIntroShowed}
                    onClick={() => this.handleClick()}
                />
                <div className={`gallery ${this.state.isIntroShowed ? 'hidden' : 'show'}`}>
                    <div className="header">
                        <h1 className="title">Hall of fame</h1>
                        <h2 className="subtitle">Astronauts of&nbsp;the&nbsp;world</h2>
                    </div>
                    <ListOfAstronauts 
                        listOfAstronauts={this.props.testData}
                    />
                    <div className="footer">Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>        
                </div>
            </div>
        );
    }
}

export default Gallery;