import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import App from './App';
import "./css/index.css";
import axios from 'axios';

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('https://api.oneulmohae.co.kr/logout', {}, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
          Refresh: localStorage.getItem('refreshToken'),
        },
        withCredentials: true, // 자격 증명을 포함
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('isExistingMember');
      localStorage.removeItem('memberId');
      localStorage.removeItem('recentData');
      setIsLoggedIn(false);
      alert("로그아웃 되었습니다.");
      navigate("/Login");
    } catch (error) {
      console.error("로그아웃에 실패하였습니다: ", error);
      alert("로그아웃에 실패하였습니다.");
    }
  };

  return (
    <App handleLogout={handleLogout} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);