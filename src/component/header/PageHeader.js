import HomeButton from "./HomeButton";
import MainMenu from "./MainMenu";
import MainSearch from "./MainSearch";

export default function PageHeader(props){
    // return (
    //     <div className={styles.header}>
    //         <h1 className={styles.title}>A calculator</h1>
    //         <button className={"custom_button"}>button</button>
    //     </div>
    // );
    //const menuClass = ""
    return (
        <header className="p-3 border-bottom"> {/*mb-3*/}
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <HomeButton/>
                    <MainMenu menu={props.menu}/>
                    <MainSearch/>
                </div>
            </div>
        </header>
    );
}