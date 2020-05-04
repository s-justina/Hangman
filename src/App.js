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
