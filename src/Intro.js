import React from 'react';
import './Intro.css';

const Intro = ({isIntroShowed, onClick}) => {     
    return(
        <div className={isIntroShowed ? 'show' : 'hidden'}>
            <div className="intro">
                <p className="introText">they touched the stars</p>
            </div>
            <div className="container">
                <div 
                    className="btn btn-three"
                    type="button"
                    onClick={onClick}>
                  <span>SHOW ME</span>
                </div>
            </div>
        </div>
    );
}

export default Intro;