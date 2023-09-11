import React from "react"
import PageHeader from "./header/PageHeader"
import PageBody from "./body/Pagebody"
import PageFooter from "./Footer/PageFooter"

export default function Pages(props){
    return (
        <>
            <PageHeader menu={props.menu}/>
            {/*<PageBody menu={"ttt"}/>*/}
            <PageBody menu={props.menu}/>
            <PageFooter/>
        </>
    )
}