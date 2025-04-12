import styles from "./validationStyle.module.css";
import react, {useState} from 'react'

function NotPaid({
    sid,
    name,
    currentPeriod,
    course,
    yearLevel,
    email,
    status,
    number,
    balance
}){
    
    const [payment, setPayment] = useState();
    const [paymentStatus, setPaymentStatus] = useState(status);
    const [refNumber, setRefNumber] = useState()

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleReferenceChange(event) {
        setRefNumber(event.target.value);
    }

    function handlePaymentStatus(event) {
        setPaymentStatus();
    }

    return(
        <div>
                <h3>Proof of Payment</h3>

                <h4>Student name</h4>
                <p>{name}</p>

                <h4>Payment Period</h4>
                <p>{currentPeriod}</p>

                <h4>Course & Section</h4>
                <p>{course}</p>

                <h4>Payment Method</h4>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an Option</option>
                    <option value="Gcash">Gcash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Pay Maya">Pay Maya</option>
                </select>

                <h4>Year Level</h4>
                <p>{yearLevel}</p>

                <h4>Reference Number</h4>
                <input type="text" onChange={handleReferenceChange} />

                <h4>Email</h4>
                <p>{email}</p>

                <h4>Status</h4>
                <p>{paymentStatus}</p>

                <h4>Number</h4>
                <p>{number}</p>

                <h4>Remaining Balance</h4>
                <p>{balance}</p>
            </div>
    )
}

export default NotPaid