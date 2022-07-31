import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmitFlags, getOutputFileNames } from "typescript";
import { HTTP } from "../../core/services/http";


export interface IRoom {
    roomNumber: string;
}
export const TestPage = () => {
    const navigate = useNavigate();
    const [getRoom, setRoom] = useState<IRoom[]>([]);
    const refetch = async () => {
        setRoom((await HTTP.client().get("room/GetRooms")).data.result);
    };

    useEffect(() => {
        const asyncFetch = async () => {
            const res = await HTTP.client().get("room/GetRooms");

            console.log(res.data.result);

        };

        asyncFetch();
    }, []);

    const goToMain = () => { navigate("/"); };
    return (
        <div style={{ padding: 50 }}>
            <input style={{ backgroundColor: "red", padding: 10, marginRight: 10 }} type="submit" className="button" value="Main page" onClick={goToMain} />
            <button style={{ backgroundColor: "greenyellow", padding: 10 }} onClick={refetch}>refetch</button>
            <div style={{ marginTop: 30 }}>
                {getRoom.map((room) => {
                    console.log(room.roomNumber);
                    return (
                        <div key={room.roomNumber}
                            style={{
                                marginBottom: 10,
                                padding: 10,
                                borderColor: "cyan",
                                borderWidth: 1,
                                borderStyle: "solid"
                            }}>
                            <h2>Room number - {room.roomNumber}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};