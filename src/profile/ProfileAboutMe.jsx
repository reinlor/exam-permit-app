import React, { useEffect, useState } from "react"
import axios from "axios";

function ProfileAboutMe() {
    const [aboutMe, setAboutMe] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users/02000288488`);
                const { aboutMe } = response.data;
                setAboutMe(aboutMe);
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        }
        fetchData();
    },[])

    function handleAboutMeChange(event) {
        setAboutMe(event.target.value)
    }
    function clearAboutMeChange() {
        setAboutMe('')
    }

    const updateAboutMe = async () => {
        try {
            const updatedAboutMe = {
                aboutMe: aboutMe
            };
            await axios.put(`http://localhost:8000/api/update/users/02000288488`,
                updatedAboutMe
            );
            alert("Profile updated successfully!")
        } catch (error) {
            console.log("Error while updating profile", error);
        }
    }

    return (
        <div>
            <textarea value={aboutMe} onChange={handleAboutMeChange} />
            <button onClick={clearAboutMeChange}>Clear</button>
            <button onClick={updateAboutMe}>Save</button>
        </div>
    )
}

export default ProfileAboutMe