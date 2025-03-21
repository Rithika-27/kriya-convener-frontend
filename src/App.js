import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import React from "react";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import PortalWrapper from "./pages/PortalWrapper";
import ApplyAttendance from "./pages/ApplyAttendance";
import ListAttendance from "./pages/ListAttendance";
import ListParticipants from "./pages/ListParticipants";
import ResultPage from "./pages/ResultPage";
import PromoteRound from "./pages/PromoteRound";
import AdminLogin from "./pages/AdminLogin";
import EventResults from "./pages/EventResults"; // Direct Event Results Page

const App = () => {
  return (
    <React.Fragment>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="event-results" element={<EventResults />} /> 

          <Route path="dashboard" element={<PortalWrapper />}>
            <Route path="apply-attendance" element={<ApplyAttendance />} />
            <Route path="list-attendance" element={<ListAttendance />} />
            <Route path="list-participants" element={<ListParticipants />} />
            <Route path="result" element={<ResultPage />} />
            <Route path="promote" element={<PromoteRound />} />

            <Route index element={<Navigate to="/dashboard/apply-attendance" />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;