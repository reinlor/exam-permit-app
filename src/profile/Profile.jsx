import React,{ useState, createContext} from "react"
import Navigation from "../components/navbar/Navigation";
import ProfileInformation from "./ProfileInformation.jsx";
import ProfilePicChange from "./ProfilePicChange.jsx";
import ProfileAboutMe from "./ProfileAboutMe.jsx";
function Profile(){
    
    return(
        <div>
            <Navigation/>
            <ProfileInformation/>
            <ProfilePicChange/>
            <ProfileAboutMe/>
        </div>
    )
}

export default Profile