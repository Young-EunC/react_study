import React from "react";
import Game from "./game/Game";
import Dictionary from "./dictionary/Dictionary";
import BodyTitle from "./BodyTitle";
import styles from "./Pagebody.module.css";

class PageBody extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            menuIndex: props.menu,
            /*bodyTitle: "",*/
        };
    }

    handleClick(event) {
        this.setState({
            menuIndex: event.target.value,
        });
    };

    render() {
        const menu = this.state.menuIndex;
        let bodyTitle;
        let body;
            /*if(menu === "TickTackToe"){
                bodyTitle = "Tick Tack Toe";
                body = <Game/>;
            } else if(menu === "Dictionary"){
                bodyTitle = "Dictionary";
                body = <Dictionary/>;
            }*/
        switch (menu){
            case "TickTackToe":
                bodyTitle = "Tick Tack Toe";
                body = <Game/>;
                break;
            case "Dictionary":
                bodyTitle = "Dictionary";
                body = <Dictionary/>;
                break;
            case "GoMain":
            default:
                bodyTitle = "Main";
                break;
        }
        // if(bodyTitle !== "Main"){
            
        // } else {
        //     return(
        //         <>
        //             <div className={"body"}>
        //                 <BodyTitle title={bodyTitle}/>
        //                 <input type={"button"} value={"TickTackToe"} onClick={event => this.handleClick(event)}/>
        //                 <input type={"button"} value={"Dictionary"} onClick={event => this.handleClick(event)}/>
        //             </div>
        //             <div className={"footer"}></div>
        //         </>
        //     );
        // }
        return(
            <div className={"body"}>
                <BodyTitle title={bodyTitle}/>
                {body}
                <input type={"button"} value={"GoMain"} className={styles.menu_button} onClick={event => this.handleClick(event)}/>
            </div>
        );
    };

}
export default PageBody;