import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter, Routes } from "react-router-dom";

/* import { HooksApp } from './HooksApp'; */
/* import { CounterApp } from './01-useState/CounterApp'; */
/* import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'; */
/* import { SimpleForm } from './02-useEffect/SimpleForm'; */
/* import { FromWithCustomHook } from './02-useEffect/FormWithCustomHook'; */
/* import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'; */
/* import { FocusScreen } from './04-useRef/FocusScreen'; */
/* import { Layaout } from './05-useLayoutEffect/Layaout'; */
/* import { Memorize } from './06-memos/Memorize'; */
/* import { MemoHook } from './06-memos/MemoHook'; */
/* import { CallbackHook } from './06-memos/CallbackHook'; */
/* import { Padre } from './07-tarea-memo/Padre'; */
/* import './08-useReducer/intro-reducer' */
/* import { TodoApp } from './08-useReducer/TodoApp'; */




ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <MainApp/>
</BrowserRouter>
 
)
