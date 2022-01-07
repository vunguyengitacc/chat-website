import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthFeature from "../feature/auth";
import ChatAppFeature from "../feature/chat-app";
import LandingFeature from "../feature/landing";
import NotFoundFeature from "../feature/not-found";
import AuthEntry from "./AuthEntry";
import PrivateEntry from "./PrivateEntry";

const MasterRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingFeature />} />
        <Route path="/auth/*" element={<AuthEntry />}>
          <Route path="/auth/*" element={<AuthFeature />} />
        </Route>
        <Route path="/app/*" element={<PrivateEntry />}>
          <Route path="/app/*" element={<ChatAppFeature />} />
        </Route>
        <Route path="*" element={<NotFoundFeature />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRoute;
