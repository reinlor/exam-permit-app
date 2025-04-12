import Navigation from "../components/navbar/Navigation";
import styles from "./transactionStyle.module.css";

function Transaction() {
    const tableContent = []

    return (
        <>
            <Navigation />
            <div className={styles.transactionContainer}>
                <div>
                    <h1>Transaction History</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Transaction Number</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Payment Mode</th>
                            <th>Payment Period</th>
                            <th>Reference Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Transaction;