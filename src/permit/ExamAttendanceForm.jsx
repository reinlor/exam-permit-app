import styles from "./permitStyle.module.css";
import React, { useContext } from "react";
import { permitContext } from "./Permit";
import ExamPermitTable from "./ExamPermitTable";

function ExamAttendanceForm() {

    const permit = useContext(permitContext)

    return (
        <>
            <div className={styles.permitContainer}>
                <div>
                    <h1>Exam Attendance Form</h1>
                    <h3>Tertiary / Senior High School</h3>
                    <br />

                    <p>NAME:&nbsp; {permit.name}</p>
                    <p>STUDENT NO:&nbsp; {permit.sid}</p>
                    <p>PROGRAM:&nbsp; {permit.program}</p>
                </div>
                <div>
                    <h1>STI COLLEGE DASMARINAS INC.</h1>
                    <p>SY & TERM: <span>{permit.schoolYear} / {permit.term}</span></p>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere distinctio perspiciatis
                        repudiandae beatae sed et ullam nam, rem laudantium provident excepturi quae officia repellendus voluptatum
                        earum optio quasi eaque.</div>
                </div>
            </div>
            <ExamPermitTable />
        </>
    )
}

export default ExamAttendanceForm