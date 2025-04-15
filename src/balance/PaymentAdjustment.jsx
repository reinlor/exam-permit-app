import React,{useContext} from "react";
import styles from "./balanceStyle.module.css";

import { balanceContext } from "./Balance";

function PaymentAdjustment() {

    const balance = useContext(balanceContext);

    const newDiscount = (discount) => {
        // di ko alam kung tama calculation ko 🤓
        return balance.tuitionFee - (balance.tuitionFee * (discount / 100))
    }
    function discount() {
        if (balance.hasDiscount) {
            return <>
                <tr>
                    <td>{balance.discountDate} | {balance.discountName}</td>
                </tr>
                <tr>
                    <td>Tuition Fee</td>
                    <td>{newDiscount(balance.discountPercent)}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{newDiscount(balance.discountPercent)}</td>
                </tr>
            </>
        }
        <></>
    }
    
    return (
        <>
            <table>
                <tbody>
                    <tr className={styles.headerTXT}>
                        <td>Payments and Adjustments for {balance.schoolYear} {balance.schoolTerm} Tertiary</td>
                    </tr>
                    <tr>
                        <td className={styles.separator} colSpan={3}></td>
                    </tr>

                    {discount()}

                    <tr className={styles.tuitionFeeContainer3}>
                        <td>{balance.paymentDate} | OR # {balance.paymentID}</td>
                    </tr>
                    <tr className={styles.otherFee2TXT}>
                        <td>Miscellaneous Fees</td>
                        <td>Php {balance.miscFee}</td>
                    </tr>
                    <tr>
                        <td className={styles.separator2} colSpan={3}></td>
                    </tr>
                    <tr className={styles.otherFee2TXT}>
                        <td>Other School Fees</td>
                        <td>Php {balance.otherFee}</td>
                    </tr>
                    <tr>
                        <td className={styles.separator2} colSpan={3}></td>
                    </tr>
                    <tr className={styles.otherFee2TXT}>
                        <td>Tuition Fees</td>
                        <td>Php {balance.tuitionFee}</td>
                    </tr>
                    <tr>
                        <td className={styles.separator2} colSpan={3}></td>
                    </tr>

                    <tr className={styles.totalFeeTXT}>
                        <td>Total</td>
                        <td>Php {balance.totalBalance}</td>
                    </tr>

                    <tr className={styles.tuitionFeeContainer4}>
                        <td>Tuition fee</td>
                        <td>Php {balance.tuitionFee}</td>
                    </tr>

                    <tr className={styles.tuitionFeeContainer5}>
                        <td>Assessment Balance</td>
                        <td>Php {balance.assessmentBalance}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PaymentAdjustment