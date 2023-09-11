import React from "react";

export default function MainMenu(props){
    const menuList = ["TickTackToe", "Dictionary", "Gardening", "floriculture"];

    const menuBtn = menuList.map((value, index)=>{
        const aLink = "?menu="+value;
        let aClass = "nav-link px-2 "; 
        aClass += (props.menu!=="" && props.menu===value)? "link-secondary" : "link-body-emphasis";
        return (
            <li key={"main-menu-"+index}><a href={aLink} className={aClass}>{value}</a></li>
        )
    })
    
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {menuBtn}
        </ul>
    );
}