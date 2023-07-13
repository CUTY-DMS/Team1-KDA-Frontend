import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import SignInPage from "../pages/signIn";
import SignUpPage from "../pages/signUp";
import MainPage from "../pages/main";
import FindPassword from "../pages/forgetPassword";
import LoadingPage from "../pages/loading/loading";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/signIn" element={<SignInPage/>} />
                <Route path="/signUp" element={<SignUpPage/>} />
                <Route path="/findPassword" element={<FindPassword/>} />
                <Route path="/main" element={<MainPage/>} />
                <Route path="/test" element={<LoadingPage/>} />
                <Route path="*" element={<>올바르지 않은 경로입니다!</>} />
            </Routes>
        </BrowserRouter>
    );
};