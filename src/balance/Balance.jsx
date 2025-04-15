import Navigation from "../components/navbar/Navigation";
import styles from "./balanceStyle.module.css";
import React, { createContext, useContext, useState } from "react";
import Charges from './Charges.jsx'
import PaymentAdjustment from "./PaymentAdjustment.jsx";

export const balanceContext = createContext();
// props sana kaso walang default props si React 19
function Balance() {

    const [balance, newBalance] = useState({
        totalBalance: 0.00,
        assessmentBalance: 0.00,
        tuitionFee: 0.00,
        otherFee: 0.00,
        miscFee: 0.00,
        schoolYear: '2010-2011',
        schoolTerm: '1st',
        hasDiscount: true,
        discountName: 'Nigga Certified',
        discountDate: '01 Jan, 2010',
        discountPercent: 0,
        paymentDate: '01 Jan, 2010',
        paymentID: '0000000'
    })

    
    
    return (
        <>
            <Navigation />
            <div className={styles.balanceContainer}>
                <div className={styles.balanceHeader}>
                    <h3>Tertiary</h3>
                    <h3>Total Balance: Php {balance.totalBalance}</h3>
                </div>
                <div className={styles.balanceData}>
                    <div className={styles.balanceContent}>
                        <balanceContext.Provider value={balance}>
                            <Charges/>
                        </balanceContext.Provider>
                    </div>

                    <div className={styles.paymentContent}>
                        <balanceContext.Provider value={balance}>
                            <PaymentAdjustment/>
                        </balanceContext.Provider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Balance;