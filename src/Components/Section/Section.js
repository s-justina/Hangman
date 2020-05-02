import React from 'react';
import './Section.css';
import pool from '../../pool/questions';

class Section extends React.Component {
    state = {
        dataToPlayGame: {},
    };
    componentDidMount() {
        const randomNumber = Math.floor(Math.random()*pool.questions.length);
        this.setState({
            dataToPlayGame: pool.questions[randomNumber]
        })
    }
    answerArea = ()=>{
        if(this.state.dataToPlayGame.answer){
            return  this.state.dataToPlayGame.answer.split('').map((letter,index)=>{
                return <div key={index} className='anonimAnswerStyle'> {letter}</div>
            });
        } else {
            return null
        }

    };
    render() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const btnLetters = alphabet.map((letter, index) => {
            return <div key={index} className='letters'>
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
                    <div className='inquiry'>{`${this.state.dataToPlayGame.inquiry}`}</div>
                    <div className='answer-area'>{this.answerArea()}</div>
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