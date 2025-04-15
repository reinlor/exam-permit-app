import React,{useState, createContext} from "react";
import Navigation from "../components/navbar/Navigation";
import TransactionContent from "./TransactionContent";

export const TransactionContext = createContext()

function Transaction() {
    const [transactionData, setTransactionData] = useState([{
        
            transactionNumber: 1001,
            transactionDate: '01/01/20',
            payment: '92999.99',
            paymentMode: 'GCash',
            paymentPeriod: '1st Term',
            referenceNumber: '42432'
    }]);

        

    const renderContent = () => {
        if(transactionData.length <= 0){
            return // No transactions have been recorded yet 🙂
        }
        else{
            return <TransactionContext.Provider value={transactionData}>
                <TransactionContent/>
            </TransactionContext.Provider>
            
    }}

    return (
        <>
            <Navigation />
                {renderContent()}
        </>
    );
}

export default Transaction;