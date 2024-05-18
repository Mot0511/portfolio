import React from 'react';
import cl from './App.module.sass'
import './global.sass'
import Main from './components/main/main';
import Projects from './components/projects/projects';
import Aboutme from './components/aboutme/aboutme';

function App() {
    return ( 
        <div>
            <Main />
            <Projects />
            <Aboutme />
        </div>
    );
}

export default App;