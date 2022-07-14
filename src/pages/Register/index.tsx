import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP } from "../../core/services/http";
import "./style.css";

export interface IUserDetails {
    displayName: string,
    email: string,
    password: string,
    phoneNumber: string
}

export const Register = () => {

    const navigate = useNavigate();
    const [userRegister, setUserRegister] = React.useState<IUserDetails>(
        {
            email: "",
            password: "",
            displayName: "",
            phoneNumber: ""
        });
    const [error, setError] = useState<string>("");
    const register = async () => {
        const res = await HTTP.client().post("/register", userRegister);
    };
    const goToMain = () => { navigate("/"); };



    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

    };

    return (

        <form onSubmit={submitHandler}>
            <input type="submit" className="button" value="BACK" onClick={goToMain} />

            <div className="container">
                <h4 className="register-h4">REGISTER</h4>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" id="name" onChange={u => setUserRegister({ ...userRegister, displayName: u.target.value })} value={(userRegister.displayName)}></input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" id="email" onChange={u => setUserRegister({ ...userRegister, email: u.target.value })} value={(userRegister.email)}></input>
                </div>

                <div className="form-group">
                    <label>Phone number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" onChange={u => setUserRegister({ ...userRegister, phoneNumber: u.target.value })} value={(userRegister.phoneNumber)}></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="password" onChange={u => setUserRegister({ ...userRegister, password: u.target.value })} value={(userRegister.password)}></input>
                </div>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <input type="submit" className="button" value="REGISTER" onClick={register} />
            </div>
        </form >

    );
};
