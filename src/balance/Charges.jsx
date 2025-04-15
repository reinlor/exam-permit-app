import React,{useContext} from "react";
import styles from "./balanceStyle.module.css";

import { balanceContext } from "./Balance";

function Charges() {

    const balance = useContext(balanceContext);

    return (
        <>
            <table>
                <tbody>
                    <tr className={styles.headerTXT}>
                        <td>Charges for {balance.schoolYear} {balance.schoolTerm} Term Tertiary</td>
                    </tr>
                    <tr>
                        <td className={styles.separator} colSpan={3}></td>
                    </tr>
                    <tr className={styles.tuitionFeeContainer}>
                        <td>Tuition fee</td>
                        <td>Php {balance.tuitionFee}</td>
                    </tr>

                    <tr className={styles.tuitionFeeContainer}>

                        <td colSpan={2}>Other school fee<br />
                            <span className={styles.otherFeeTXT}>(Registration Fee, Other School Fees)</span>
                        </td>

                        <td>Php {balance.otherFee}</td>
                    </tr>
                    <tr className={styles.tuitionFeeContainer}>

                        <td colSpan={2}>Miscellaneous Fees<br />
                            <span className={styles.otherFeeTXT}>
                                (Student Related Activities, Organization/SC Fee,<br />
                                Student Learning Materials, Connectivity Fee,<br />
                                Network Events Fee, E-LMS)</span>
                        </td>

                        <td className={styles.amountPHP}>Php {balance.miscFee}</td>
                    </tr>

                    <tr className={styles.tuitionFeeContainer2}>
                        <td>Tuition fee</td>
                        <td>Php {balance.tuitionFee}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Charges