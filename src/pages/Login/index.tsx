import React, { useState } from "react";

import "./style.css";

export interface IDetails {
    name: string;
    email: string;
    password: string;
}

const adminUser = {
    email: "a@a.com",
    password: "admin123"
};

export const Login = () => {

    const [user, setUser] = useState<IDetails>({ name: "", email: "", password: "" });
    const [error, setError] = useState<string>("");

    const login = (details: IDetails) => {

        if (details.email == adminUser.email && details.password == adminUser.password) {
            setUser({
                name: details.name,
                email: details.email,
                password: details.password
            });
            setError("");
            console.log("success");

        }
        else {
            setError("Details do not match");
        }
    };

    const [details, setDetails] = useState<IDetails>({ name: "", email: "", password: "" });

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        login(details);
    };

    return (
        <form className="main" onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className='input-container'>
                <label htmlFor='name'>Name: </label>
                <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
            </div>
            <div className='input-container'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
            </div>
            <div className='input-container'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <input type="submit" className="button" value="LOGIN" />
        </form>
    );
};