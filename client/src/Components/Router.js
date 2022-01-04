import React from "react";
import { Routes, Redirect, Route } from 'react-router-dom';
import Home from "../Routes/Home";
import Worldcup from "../Routes/Worldcup";

const router = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/worldcup" element={<Worldcup/>} />
        </Routes>
        </>
    );
};

export default router;