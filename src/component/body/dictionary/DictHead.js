import React from "react";
import styles from "./DictHead.module.css";
import {Link} from "react-router-dom";
export default function DictHead(){
    return (
        <div className={styles.dict_head}>
            <span><Link to={"/"}>영어 단어장</Link></span>
            <span>
                <button>단어 추가</button>
                <button>Day 추가</button>
            </span>
        </div>
    );
}