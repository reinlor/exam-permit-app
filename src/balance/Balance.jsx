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
                                <tr>
                                    <td>Charges for {schoolYear} {schoolTerm} Term Tertiary</td>
                                </tr>
                                <tr>
                                    <td>Tuition fee</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>
                                <tr>
                                    <td>Other school fee</td>
                                    <td>Php {otherFee}</td>
                                </tr>
                                <tr>
                                    <td>Miscellaneous fee</td>
                                    <td>Php {miscFee}</td>
                                </tr>
                                <tr>
                                    <td>Tuition fee</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.paymentContent}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Payments and Adjustments for {schoolYear} {schoolTerm} Tertiary</td>
                                </tr>
                                {discount()}
                                <tr>
                                    <td>{paymentDate} | OR # {paymentID}</td>
                                </tr>
                                <tr>
                                    <td>Miscellaneous Fees</td>
                                    <td>Php {miscFee}</td>
                                </tr>
                                <tr>
                                    <td>Other School Fees</td>
                                    <td>Php {otherFee}</td>
                                </tr>
                                <tr>
                                    <td>Tuition Fees</td>
                                    <td>Php {tuitionFee}</td>
                                </tr>
                                <tr>
                                    <td>Total Fees</td>
                                    <td>Php {totalBalance}</td>
                                </tr>
                                <tr>
                                    <td>Assessment Balance</td>
                                    <td>Php {assessmentBalance}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3></h3>

                        <div className={styles.paymentTag}>13 Jan, 2025 | OR # President's Honors TF</div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Balance;