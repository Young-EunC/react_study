import styles from "./Word.module.css";
import {useState} from "react";

export default function Word({word}){
    const [isShow, setIsShow] = useState(false);

    function toggleShow(){
        setIsShow(!isShow);
    }

    return (
        <>
            <tr key={word.id}>
                <td><input type={"checkbox"}/></td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button className={styles.btn_show} onClick={() => toggleShow()}>뜻 보기</button>
                    <button className={`${styles.btn_show} ${styles.btn_del}`}>삭제</button>
                </td>
            </tr>
        </>
    );
}