import './index.css';
import React from 'react';

import Header from "./component/header/Header";
import PageBody from "./component/body/Pagebody";


function App(){
    return(
        <>
            <Header/>
            {/*<PageBody menu={"ttt"}/>*/}
            <PageBody menu={""}/>
        </>
    );
}

export default App;
