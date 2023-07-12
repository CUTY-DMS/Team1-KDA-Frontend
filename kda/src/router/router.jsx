import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "../pages/test";
import LandingPage from "../pages/landing";
import SignInPage from "../pages/signIn";
import SignUpPage from "../pages/signUp";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/signIn" element={<SignInPage/>} />
                <Route path="/signUp" element={<SignUpPage/>} />
                <Route path="/test" element={<Hello />} />
                <Route path="*" element={<>올바르지 않은 경로입니다!</>} />
            </Routes>
        </BrowserRouter>
    );
};