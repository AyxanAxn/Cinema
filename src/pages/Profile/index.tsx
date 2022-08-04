import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP } from "../../core/services/http";


export interface IProfileDetails {
    username: string,
    email: string,
    password: string,
    phoneNumber: string
}

export const Profile = () => {


    const [userProfile, setUserProfile] = React.useState<IProfileDetails>(
        {
            email: "",
            password: "",
            username: "",
            phoneNumber: ""
        });



    const [Message, setMessage] = useState<string>("");

    return (

        <form>
            <div className="profileContainer">
                <h4 className="profile-h4">Profile</h4>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" id="name" onChange={u => setUserProfile({ ...userProfile, username: u.target.value })} value={(userProfile.username)}></input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" id="email" onChange={u => setUserProfile({ ...userProfile, email: u.target.value })} value={(userProfile.email)}></input>
                </div>

                <div className="form-group">
                    <label>Phone number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" onChange={u => setUserProfile({ ...userProfile, phoneNumber: u.target.value })} value={(userProfile.phoneNumber)}></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="password" onChange={u => setUserProfile({ ...userProfile, password: u.target.value })} value={(userProfile.password)}></input>
                </div>
                {(Message != "") ? (<div className='error'>{Message}</div>) : ""}
                <input type="submit" className="button" value="Edit" />
            </div>
        </form >


    );

};