import React from 'react';
import cl from './App.module.sass'
import './global.sass'
import Main from './components/main/main';
import Projects from './components/projects/projects';
import Aboutme from './components/aboutme/aboutme';
import Diplomas from './components/diplomas/diplomas';

function App() {
    return ( 
        <div>
            <Main />
            <Projects />
            <Diplomas />
            <Aboutme />
        </div>
    );
}

export default App;