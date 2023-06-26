import styles from './Header.module.css';
export default function Header(){
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>A calculator</h1>
            <button className={"custom_button"}>button</button>
        </div>
    );
}