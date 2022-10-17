import React from "react";
import { useState,useEffect } from "react";
import Search from "./view/Search";
import View from "../pages/view/View";
import * as Api from "../api/api";
import { useNavigate } from "react-router-dom";

function Share() {
  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("/write");
  };
  return (
    <>
    <Search/>
    <View/>
      <button onClick={navigateToWrite}>글쓰기</button>
    </>
  );
}

export default Share;
