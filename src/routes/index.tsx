import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { MainPage } from "../pages/MainPage";
import { Register } from "../pages/Register";
import { TestPage } from "../pages/Test";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/room" element={<TestPage />} />

        </Routes>
    );
};