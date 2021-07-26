import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import Incdc from './Incdc';
//import TodoList from './TodoList';
//import Accordian from './Accordian';
//import Cards from '../src/Cards';
//import SelectMenu from './Material/Select';
import App from './Material/App';


ReactDOM.render( <BrowserRouter>
               < App />
               </BrowserRouter> , document.getElementById('root'));