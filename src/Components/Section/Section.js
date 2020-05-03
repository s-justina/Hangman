import React from 'react';
import './Section.css';
import pool from '../../pool/questions';

class Section extends React.Component {
    state = {
        randomNumber: Math.floor(Math.random()*pool.questions.length),
        dataToPlayGame: {},
        hiddenClue: true,
    };
    componentDidMount() {
        this.setState({
            dataToPlayGame: pool.questions[this.state.randomNumber]
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
    takeClue = ()=>{
        return this.state.dataToPlayGame.clue && this.state.dataToPlayGame.clue;
    };
    showClue = ()=>{
        // return <p {this.state.hiddenClue ? {`className='clue hidden'``} : {`className='clue'`} }>Clue: {this.takeClue()}</p>
        return <p className={this.state.hiddenClue ? 'clue hidden' : 'clue'}>Clue: {this.takeClue()}</p>
    };
    handleHint = ()=>{
        this.setState({
            hiddenClue: false,
        })
    };
    resetGame = ()=>{
      this.setState({
          randomNumber: Math.floor(Math.random()*pool.questions.length),
          dataToPlayGame: pool.questions[this.state.randomNumber],
          hiddenClue: true,
      });
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
                        {this.showClue()}
                        <div className='draw-information'>Draw</div>
                    </div>
                    <div className='btn-position'>
                        <button className='btn' onClick={this.handleHint}>Hint</button>
                        <button className='btn' onClick={this.resetGame}>Play again!</button>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default Section