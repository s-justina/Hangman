import React from 'react';
import './App.css';
import './Components/Header/Header';
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header className='topHeader'/>
            <Section className='bottomSection'/>
            <Footer/>
        </div>
    );
}

export default App;

// TODO: stała szerokość między literkami hasła, zablokować możliwość klikania literek po game over i wygranej, you win po wygranej, zabarwienie dobrych literek na zielono, podmianka logo strony w karcie