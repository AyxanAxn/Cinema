import React, { useEffect, useState } from "react";
import { HTTP } from "../../core/services/http";
import { IUser } from "../../mock";

export const MainPage = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const register = async () => {
        const res = await HTTP.client().post("/register", {
            displayName: "testUser",
            email: "testUser@gmail.com",
            password: "asyncFunc",
        });

        console.log(res);
    };

    const refetch = async () => {
        setUsers((await HTTP.client().get("/users")).data.users);
    };

    useEffect(() => {
        const asyncFetch = async () => {
            const res = await HTTP.client().get("/users");

            setUsers(res.data.users);
        };

        asyncFetch();
    }, []);

    return (
        <div style={{ padding: 50 }}>
            <input style={{ backgroundColor: "red", padding: 10, marginRight: 10 }} type="submit" className="button" value="Register page" onClick={goToRegister} />
            <button style={{ backgroundColor: "red", padding: 10, marginRight: 10 }} >register</button>
            <button style={{ backgroundColor: "greenyellow", padding: 10 }} onClick={refetch}>refetch</button>
            <div style={{ marginTop: 30 }}>
                {users.map((user) => (
                    <div key={user.email}
                        style={{
                            marginBottom: 10,
                            padding: 10,
                            borderColor: "cyan",
                            borderWidth: 1,
                            borderStyle: "solid"
                        }}>
                        <div style={{ color: "wheat" }}>Name: {user.displayName}</div>
                        <div style={{ color: "wheat" }}>Email: {user.email}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};