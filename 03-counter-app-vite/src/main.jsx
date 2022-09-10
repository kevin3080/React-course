import React from 'react';
import ReactDOM from "react-dom/client";
import { CounterApp } from './CounterApp';
 import { FristApp } from './FristApp';
import { PropsApp } from './PropsApp';
// import { HelloWorldApp } from './HelloWorld';
// import { PropsApp } from './PropsApp';
//import {App} from './FristApp'
import './styles.css';




// renderizamos:
// Se aconseja que siempre trabajemos en el modo estricto
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
      <CounterApp value = {100} />
      {/* <PropsApp title='Frist App' subTitle='subtitulo'/> */}
    </React.StrictMode>
)
// todo lo que se coloca como atributo en los componentes son props
