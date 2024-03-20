import React from 'react';
import './App.css'
import {Accordion} from "./components/Accordion";

function App() {

    return (
        <div className="App">
            <Accordion
                titleValue={'Menu'}
                collapsed={false}
                onChange={()=>{}}
            />
        </div>
    );
}

export default App;
