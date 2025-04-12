import { Link } from 'react-router-dom';
import styles from './navbarStyle.module.css'
import stiLogo from '../../assets/images/STI-Logo.png'

function Navigation(){
    return(
        <>
        <div className={styles.navbar}>
            <div className={styles.navLeft}>
                <img className={styles.logo} src={stiLogo}></img>
            </div>

            <ul className={styles.navMenu}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/balance">Balance</Link></li>
                <li><Link to="/permit">Permit</Link></li>
                <li><Link to="/transaction">Transaction</Link></li>
                <li><Link to="/validation">Validation</Link></li>
            </ul>

            <div className={styles.navRight}>
                <img className={styles.iconProfile}></img>
            </div>
        </div>
        </>
    );
}

export default Navigation;