import Navigation from "../components/navbar/Navigation";
import styles from "./permitStyle.module.css";

function Permit() {
    return (<>
        <Navigation />
        <div className={styles.permitContainer}>
            <h1>Permit</h1>
            <p>Permit content goes here.</p>
        </div>
    </>
    );
}

export default Permit;