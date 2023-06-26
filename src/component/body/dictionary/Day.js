import dummy from "../../../db/data.json";
import "./Day.module.css";
import {useParams} from "react-router-dom";
import styles from "./Day.module.css";
import Word from "./Word";
export default function Day(){
    //const day = props.day;
    const { day } = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ));
    return (
        <div>
            <div className={styles.sub_title}>Day {day}</div>
            <table>
                <tbody>
                {wordList.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}