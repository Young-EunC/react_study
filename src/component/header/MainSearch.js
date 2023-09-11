import React from "react";

export default function MainSearch(props){
    return (
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>
    );
}