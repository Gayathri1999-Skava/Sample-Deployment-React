import React from 'react';
import './App.scss'
import {Header} from '../page/Header'
import {Footer} from '../page/Footer'
import {MainComponent} from '../page/MainComponent'
const App = () => (
    <div>
        <Header/>
        <MainComponent/>
        <Footer/>
    </div>
)

export default App;