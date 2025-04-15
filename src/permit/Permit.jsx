import React, { useState, createContext } from "react";
import Navigation from "../components/navbar/Navigation";
import styles from "./permitStyle.module.css";
import ExamAttendanceForm from "./ExamAttendanceForm";

export const permitContext = createContext();

function Permit() {

    const [studentInfo, setStudentInfo] = useState({
        name: 'STUDENT',
        sid: '02000200000',
        program: 'BS IN INFORMATION TECHNOLOGY',
        section: 'BSIT 1.1A',
        schoolYear: '2010-2011',
        term: '1st Term',
        course: ['Course1', 'Course2', 'Course3', 'Course4']
    });

    return (<>
        <Navigation />
        <div className={styles.permitContainer}>
            <permitContext.Provider value={studentInfo}>
                <ExamAttendanceForm />
            </permitContext.Provider>
        </div>
    </>
    );
}

export default Permit;