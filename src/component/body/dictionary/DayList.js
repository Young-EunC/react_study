import dummy from "../../../db/data.json";
import {Link} from "react-router-dom";
import styles from "./DayList.module.css";
export default function DayList(){
    return (
        <ul className={styles.list_day}>
            {dummy.days.map( day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}