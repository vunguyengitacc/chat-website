import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthFeature from "../feature/auth";
import Login from "../feature/auth/page/Login";
import Register from "feature/auth/page/Register";
import ChatAppFeature from "feature/chat-app";
import LandingFeature from "feature/landing";
import NotFoundFeature from "feature/not-found";
import AuthEntry from "./AuthEntry";
import PrivateEntry from "./PrivateEntry";

const MasterRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingFeature />} />
        <Route path="/auth" element={<AuthEntry />}>
          <Route path="/auth" element={<AuthFeature />}>
            <Route path="" element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route path="/app" element={<PrivateEntry />}>
          <Route path="/app" element={<ChatAppFeature />} />
        </Route>
        <Route path="*" element={<NotFoundFeature />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRoute;
