import React, {useState} from "react";

export interface IDetails {
    name: string;
    email: string;
    password: string;
}

export const Login = () => {
    const adminUser = {
        email: "adminadmin@com",
        password: "admin123"
    };
    
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    
    const Login = (details: IDetails) => {
        console.log(details);
    
        if(details.email == adminUser.email  && details.password == adminUser.password)
        {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }
        else{
            console.log("Details do not match");
            setError("Details do not match");
        }
    };
    
    const LogOut = () => {
        console.log("Logout");
        setUser({name: "", email: ""});
    };

    const [details, setDetails] = useState<IDetails>({name: "", email: "", password: ""});
    
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        Login(details);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input type="text" name="name" id = "name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>                
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" name="email" id = "email"  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" name="password" id = "password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
            </div> 
        </form>
    );
};