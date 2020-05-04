import React from 'react';
import './Section.css';
import pool from '../../pool/questions';
import Swal from 'sweetalert2'

class Section extends React.Component {
    state = {
        randomNumber: Math.floor(Math.random() * pool.questions.length),
        dataToPlayGame: {},
        hiddenClue: true,
        lettersFound: [],
        clickedLetter:[],
        totalLive: 10,
    };

    componentDidMount() {
        this.setState({
            dataToPlayGame: pool.questions[this.state.randomNumber]
        })
    }

    handleLetterClick = (e, clickedButtonIndex) => {
        const answerSingleLetters = this.state.dataToPlayGame.answer.toUpperCase().split('');
        let lettersFound = [...this.state.lettersFound];
        let clickedLetter = [...this.state.clickedLetter];
        let isLetterCorrect = false;
        clickedLetter = [...clickedLetter, clickedButtonIndex];
        answerSingleLetters.forEach((answerSingleLetter, i) => {
            if (answerSingleLetter === e.target.innerText.toUpperCase()) {
                lettersFound = [...lettersFound, i];
                isLetterCorrect = true;
            }
        });
        if(this.state.totalLive>0 && !isLetterCorrect){
            this.setState({
                totalLive: this.state.totalLive-1,
            }, ()=>{
                if(this.state.totalLive === 0){
                    Swal.fire({
                        title: 'GAME OVER!',
                        showClass: {
                            popup: 'animated fadeInDown faster'
                        },
                        hideClass: {
                            popup: 'animated fadeOutUp faster'
                        }
                    })
                }
            });
        }
        this.setState({
            lettersFound,
            clickedLetter
        });
    };
    answerArea = () => {
        if (this.state.dataToPlayGame.answer) {
            return this.state.dataToPlayGame.answer.split('').map((letter, index) => {
                return <div key={index}
                            className={!this.state.lettersFound.includes(index) ? 'answerStyle hidden' : 'answerStyle'}> {letter}</div>
            });
        } else {
            return null
        }
    };
    takeClue = () => {
        return this.state.dataToPlayGame.clue && this.state.dataToPlayGame.clue;
    };
    showClue = () => {
        return <p className={this.state.hiddenClue ? 'clue hidden' : 'clue'}>Clue: {this.takeClue()}</p>
    };
    handleHint = () => {
        this.setState({
            hiddenClue: false,
        })
    };
    resetGame = () => {
        this.setState({
            randomNumber: Math.floor(Math.random() * pool.questions.length),
            dataToPlayGame: pool.questions[this.state.randomNumber],
            hiddenClue: true,
            lettersFound: [],
            clickedLetter: [],
            totalLive: 10,
        });
    };

    render() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const btnLetters = alphabet.map((letter, index) => {
            return <div key={index} className={this.state.clickedLetter.includes(index)? 'checked-letters': 'letters'} onClick={(e)=>this.handleLetterClick(e,index)}>
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
                        <p className='text-information'>You have <span className='total-live'> - {this.state.totalLive} - </span> lives</p>
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