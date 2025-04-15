import styles from "./permitStyle.module.css";
import React, { useContext } from "react";
import { permitContext } from "./Permit";

function ExamPermitTable() {

    const permit = useContext(permitContext)
    const courseDisplay = permit.course.map((element, index) => {
        return <tr key={index}>
            <td>{element}</td>
            <td>{permit.section}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    });


return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Prelims</th>
                    <th>Midterms</th>
                    <th>Prefinals</th>
                    <th>Finals</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>VALIDATION OF ACCOUNT</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>PROMISSORY NOTE APPROVAL</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <td>COURSE TITLE</td>
                    <td>SECTION</td>
                    <td>PROCTOR'S SIGNATURE | DATE</td>
                </tr>
            </thead>
            <tbody>
                {courseDisplay}
                
            </tbody>
        </table>
    </>
)
}

export default ExamPermitTable