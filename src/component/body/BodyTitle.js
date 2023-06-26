import React from "react";
import styles from "./BodyTitle.module.css";

export default function BodyTitle(props){
    return (
        <div className={styles.title}>
            {props.title}
        </div>
    );

}