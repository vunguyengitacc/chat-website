import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthFeature from "../feature/auth";
import Login from "../feature/auth/page/Login";
import Register from "feature/auth/page/Register";
import ChatAppFeature from "feature/chat-app";
import ChatPage from "feature/chat-app/page/ChatPage";
import LandingFeature from "feature/landing";
import NotFoundFeature from "feature/not-found";
import AuthEntry from "./AuthEntry";
import PrivateEntry from "./PrivateEntry";
import UserPage from "feature/chat-app/page/User";
import FriendPage from "feature/chat-app/page/Friend";
import ChatBox from "feature/chat-app/page/ChatPage/component/ChatBox";
import SearchPage from "feature/chat-app/page/SearchPage";
import UserResult from "feature/chat-app/page/SearchPage/component/ListResult/UserResult";
import AllResult from "feature/chat-app/page/SearchPage/component/ListResult/AllResult";
import GroupResult from "feature/chat-app/page/SearchPage/component/ListResult/GroupResult";
import FastQuery from "feature/chat-app/page/SearchPage/component/ListResult/FastQuery";
import FriendReview from "feature/chat-app/page/Friend/component/FriendReview";

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
          <Route path="/app" element={<ChatAppFeature />}>
            <Route path="" element={<Navigate to="chat" />} />
            <Route path="chat" element={<ChatPage />}>
              <Route path=":id" element={<ChatBox />} />
            </Route>
            <Route path="search" element={<SearchPage />}>
              <Route path="" element={<Navigate to="all" />} />
              <Route path="all" element={<AllResult />} />
              <Route path="user" element={<UserResult />} />
              <Route path="group" element={<GroupResult />} />
              <Route path="convenient/:type" element={<FastQuery />} />
            </Route>
            <Route path="friend" element={<FriendPage />}>
              <Route path=":friendId" element={<FriendReview />} />
            </Route>
            <Route path="me" element={<UserPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundFeature />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRoute;
