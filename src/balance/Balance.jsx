import Navigation from "../components/navbar/Navigation";
import styles from "./balanceStyle.module.css";


// props sana kaso walang default props si React 19
function Balance({
    totalBalance = 0.00,
    assessmentBalance = 0.00,
    tuitionFee = 0.00,
    otherFee = 0.00,
    miscFee = 0.00,
    schoolYear = '2010-2011',
    schoolTerm = '1st',
    hasDiscount = true,
    discountName = 'Nigga Certified',
    discountDate = '01 Jan, 2010',
    discountPercent = 0,
    paymentDate = '01 Jan, 2010',
    paymentID = '0000000' }) {

    const newDiscount = (discount) => {
        // di ko alam kung tama calculation ko 🤓
        return tuitionFee - (tuitionFee * (discount / 100))
    }
    function discount() {
        if (hasDiscount) {
            return <>
                <tr>
                    <td>{discountDate} | {discountName}</td>
                </tr>
                <tr>
                    <td>Tuition Fee</td>
                    <td>{newDiscount(discountPercent)}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{newDiscount(discountPercent)}</td>
                </tr>
            </>
        }
        <></>
    }
    return (
        <>
            <Navigation />
            <div className={styles.balanceContainer}>
                <div className={styles.balanceHeader}>
                    <h3>Tertiary</h3>
                    <h3>Total Balance: Php {totalBalance}</h3>
                </div>
                <div className={styles.balanceData}>
                    <div className={styles.balanceContent}>
                        <table>
                            <tbody>
                                <tr className={styles.headerTXT}>
                                    <td>Charges for {schoolYear} {schoolTerm} Term Tertiary</td>
                                </tr>
                                <tr>
                                    <td className={styles.separator} colSpan={3}></td>
                                </tr>
                                <tr className={styles.tuitionFeeContainer}>
                                    <td>Tuition fee</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>

                                <tr className={styles.tuitionFeeContainer}>

                                    <td colSpan={2}>Other school fee<br />
                                        <span className={styles.otherFeeTXT}>(Registration Fee, Other School Fees)</span>
                                    </td>

                                    <td>Php {otherFee}</td>
                                </tr>
                                <tr className={styles.tuitionFeeContainer}>

                                    <td colSpan={2}>Miscellaneous Fees<br />
                                        <span className={styles.otherFeeTXT}>
                                            (Student Related Activities, Organization/SC Fee,<br />
                                            Student Learning Materials, Connectivity Fee,<br />
                                            Network Events Fee, E-LMS)</span>
                                    </td>

                                    <td className={styles.amountPHP}>Php {miscFee}</td>
                                </tr>

                                <tr className={styles.tuitionFeeContainer2}>
                                    <td>Tuition fee</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.paymentContent}>
                        <table>
                            <tbody>
                                <tr className={styles.headerTXT}>
                                    <td>Payments and Adjustments for {schoolYear} {schoolTerm} Tertiary</td>
                                </tr>
                                <tr>
                                    <td className={styles.separator} colSpan={3}></td>
                                </tr>

                                {discount()}

                                <tr className={styles.tuitionFeeContainer3}>
                                    <td>{paymentDate} | OR # {paymentID}</td>
                                </tr>
                                <tr className={styles.otherFee2TXT}>
                                    <td>Miscellaneous Fees</td>
                                    <td>Php {miscFee}</td>
                                </tr>
                                <tr>
                                    <td className={styles.separator2} colSpan={3}></td>
                                </tr>
                                <tr className={styles.otherFee2TXT}>
                                    <td>Other School Fees</td>
                                    <td>Php {otherFee}</td>
                                </tr>
                                <tr>
                                    <td className={styles.separator2} colSpan={3}></td>
                                </tr>
                                <tr className={styles.otherFee2TXT}>
                                    <td>Tuition Fees</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>
                                <tr>
                                    <td className={styles.separator2} colSpan={3}></td>
                                </tr>

                                <tr className={styles.totalFeeTXT}>
                                    <td>Total</td>
                                    <td>Php {totalBalance}</td>
                                </tr>

                                <tr className={styles.tuitionFeeContainer4}>
                                    <td>Tuition fee</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>

                                <tr className={styles.tuitionFeeContainer5}>
                                    <td>Assessment Balance</td>
                                    <td>Php {assessmentBalance}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Balance;