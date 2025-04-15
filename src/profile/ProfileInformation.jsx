import React,{ useState} from "react"

function ProfileInformation(){
    const [profile, setProfile] = useState({
            name: 'Student',
            sid: '020002000000',
            academicLevel: 'College',
            yearLevel: '1st year',
            course: 'BSIT',
            address: 'somewhere',
            contactNumber: '090000000',
            studentEmail: 'placeholder@test.com'
        });

        
        function handleAddressChange(event){ setProfile(p => ({...p, address: event.target.value})) };
        function handleContatNumberChange(event){ setProfile(p => ({...p, contactNumber: event.target.value})) };
        function handleStudentEmailChange(event){ setProfile(p => ({...p, studentEmail: event.target.value})) };
    
        return(
        <div>
            <h3>Information</h3>
            <label>Name:<input type="text" value={profile.name} 
                readOnly/></label><br/>
            <label>Student ID:<input type="text" value={profile.sid} 
                readOnly/></label><br/>
            <label>Academic Level:<input type="text" value={profile.academicLevel}
                readOnly/></label><br/>
            <label>Year Level:<input type="text" value={profile.yearLevel}
                readOnly/></label><br/>
            <label>Course:<input type="text" value={profile.course}
                readOnly/></label><br/>

            <h3>Contacts</h3>
            <label>Address:<input type="text" value={profile.address}
                onChange={handleAddressChange}/></label><br/>
            <label>Contact Number:<input type="text" value={profile.contactNumber}
                onChange={handleContatNumberChange}/></label><br/>
            <label>Student Email:<input type="text" value={profile.studentEmail}
                onChange={handleStudentEmailChange}/></label><br/>

            <button>Save Changes</button>
        </div>
    );
}

export default ProfileInformation