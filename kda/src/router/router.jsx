import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import SignInPage from "../pages/signIn";
import SignUpPage from "../pages/signUp";
import MainPage from "../pages/main";
import FindPassword from "../pages/forgetPassword";
import LoadingPage from "../pages/loading/loading";
import MyPage from "../pages/myInformation";
import StudentPage from "../pages/viewStudent";
import NotificationPage from "../pages/notification";
import NotificationCreatePage from "../pages/notificationCreate";
import NotificationModifyPage from "../pages/notificationModify";
import NotificationDetailPage from "../pages/notificationDetail";
import CalenderPage from "../pages/calender";
import Schedule from "../pages/schedule";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/findPassword' element={<FindPassword />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/myInformation' element={<MyPage />} />
        <Route path='/student' element={<StudentPage />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route
          path='/notificationCreate'
          element={<NotificationCreatePage />}
        />
        <Route
          path='/notificationModify/:id'
          element={<NotificationModifyPage />}
        />
        <Route path='/notification/:id' element={<NotificationDetailPage />} />
        <Route path='/calender' element={<CalenderPage />} />
        <Route path='/test' element={<LoadingPage />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='*' element={<>올바르지 않은 경로입니다!</>} />
      </Routes>
    </BrowserRouter>
  );
};
