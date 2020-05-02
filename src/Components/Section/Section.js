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
                <section className='game-container'>
                    <div className='alphabet-position'>
                        {btnLetters}
                    </div>
                    <div className='inquiry'>inquiry</div>
                    <div className='answer-area'>Answer area _ _ _</div>
                    <div className='life-qty'>
                        <p className='text-information'>You have /number/ lives</p>
                        <p className='clue'>Clue:</p>
                        <div className='draw-information'>Draw</div>
                    </div>
                    <div className='btn-position'>
                        <button className='btn'>Hint</button>
                        <button className='btn'>Play again!</button>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default Section