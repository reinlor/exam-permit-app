import React,{useState} from "react"

function ProfileAboutMe(){
    const [aboutMe, setAboutMe] = useState('');

    function handleAboutMeChange(event){
        setAboutMe(event.target.value)
    }
    function clearAboutMeChange(){
        setAboutMe('')
    }
    function saveAboutMeChange(){
        // express and mongodb BS to input data to the Dbs
    }
    return(
        <div>
            <textarea value={aboutMe} onChange={handleAboutMeChange} />
            <button onClick={clearAboutMeChange}>Clear</button>
            <button>Save</button>
        </div>
    )
}

export default ProfileAboutMe