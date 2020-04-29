import React from 'react';
import './Section.css';

class Section extends React.Component {

    render() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const btnLetters = alphabet.map(letter => {
            return <div className='letters'>
                {letter}
            </div>
        });
        return (
            <React.Fragment>
                <h2 className='task'>Use the alphabet below to guess the word, or click hint to get a clue.</h2>
                <section className='sectionContainer'>
                    <div className='alphabetPosition'>
                        {btnLetters}
                    </div>
                    <div className='inquiry'>inquiry</div>
                </section>
            </React.Fragment>
        )
    }
}

export default Section