import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


const Home = () => {
  useEffect(() => {
    // Check for username in URL and store in localStorage
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    if (username) {
      localStorage.setItem('user', JSON.stringify({ username }));
    }
  }, []);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;