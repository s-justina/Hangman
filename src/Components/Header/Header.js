import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='headerContainer'>
                    <div className='header'/>
                    <h1 className='title'>hangman</h1>
                </div>
            </React.Fragment>

        )
    }
}

export default Header