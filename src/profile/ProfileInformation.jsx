import React, { useEffect, useState } from "react"
import axios from "axios";

function ProfileInformation() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users/02000288488`)
                setProfile(response.data)
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        }
        fetchData();
    }, [])

    const updateData = async () =>{
        try {
            const updatedProfile = {
                address: profile.address,
                contactNumber: profile.contactNumber,
                studentEmail: profile.studentEmail
            };
            await axios.put(`http://localhost:8000/api/update/users/02000288488`,
                updatedProfile
            );
            alert("Profile updated successfully!")
        } catch (error) {
            console.log("Error while updating profile", error);
        }
    }

    const fullName = `${profile.lName}, ${profile.fName} ${profile.mName}`;
    console.log(profile);

    function handleAddressChange(event) { setProfile(p => ({ ...p, address: event.target.value })) };
    function handleContatNumberChange(event) { setProfile(p => ({ ...p, contactNumber: event.target.value })) };
    function handleStudentEmailChange(event) { setProfile(p => ({ ...p, studentEmail: event.target.value })) };

    return (
        <div>
            <h3>Information</h3>
            <label>Name:<input type="text" value={fullName}
                readOnly /></label><br />
            <label>Student ID:<input type="text" value={profile.sid}
                readOnly /></label><br />
            <label>Academic Level:<input type="text" value={profile.academicLevel}
                readOnly /></label><br />
            <label>Year Level:<input type="text" value={profile.yearLevel}
                readOnly /></label><br />
            <label>Program:<input type="text" value={profile.program}
                readOnly /></label><br />

            <h3>Contacts</h3>
            <label>Address:<input type="text" value={profile.address}
                onChange={handleAddressChange} /></label><br />
            <label>Contact Number:<input type="text" value={profile.contactNumber}
                onChange={handleContatNumberChange} /></label><br />
            <label>Student Email:<input type="text" value={profile.studentEmail}
                onChange={handleStudentEmailChange} /></label><br />

            <button onClick={updateData}>Save Changes</button>
        </div>
    );
}

export default ProfileInformation