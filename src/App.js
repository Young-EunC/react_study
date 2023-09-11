import './index.css';
import React from 'react';
import Pages from './component/Page';


function App(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const menu = (urlSearchParams.get('menu'))? urlSearchParams.get('menu') : '';

    return(
        <Pages menu={menu}/>
    );
}

export default App;
