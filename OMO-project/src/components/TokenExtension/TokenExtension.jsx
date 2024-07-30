import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import styles from './TokenExtension.module.css';

const TokenExtension = ({ setIsLoggedIn }) => {
  const [remainingTime, setRemainingTime] = useState({ access: null, refresh: null });
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  useEffect(() => {
    if (accessToken && refreshToken) {
      const accessExpirationTime = getTokenExpiration(accessToken);
      const refreshExpirationTime = getTokenExpiration(refreshToken);
      if (accessExpirationTime && refreshExpirationTime) {
        updateRemainingTime(accessExpirationTime, refreshExpirationTime);
        const intervalId = setInterval(() => {
          updateRemainingTime(accessExpirationTime, refreshExpirationTime);
        }, 1000);
        return () => clearInterval(intervalId);
      }
    }
  }, [accessToken, refreshToken]);

  const getTokenExpiration = (token) => {
    try {
      const { exp } = jwtDecode(token);
      return exp * 1000; // 밀리초 단위로 변환
    } catch (error) {
      console.error('토큰 디코딩 실패:', error);
      return null;
    }
  };

  const updateRemainingTime = (accessExpirationTime, refreshExpirationTime) => {
    const currentTime = Date.now();
    const accessTimeLeft = accessExpirationTime - currentTime;
    const refreshTimeLeft = refreshExpirationTime - currentTime;

    if (accessTimeLeft <= 0 || refreshTimeLeft <= 0) {
      alert('로그아웃 됐습니다.');
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setAccessToken(null);
      setRefreshToken(null);
      setRemainingTime({ access: null, refresh: null });
      window.location.reload(); // 페이지 새로고침
    } else {
      setRemainingTime({
        access: Math.floor(accessTimeLeft / 1000), // 초 단위로 변환
        refresh: Math.floor(refreshTimeLeft / 1000), // 초 단위로 변환
      });
    }
  };

  const handleTokenRefresh = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      if (!accessToken || !refreshToken) {
        throw new Error('토큰이 없습니다.');
      }

      const response = await axios.get('https://api.oneulmohae.co.kr/reissueToken', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Refresh: refreshToken,
        },
      });

      console.log(response);
      const newAccessToken = response.headers.authorization;
      const newRefreshToken = response.headers.refresh;
      if (!newAccessToken || !newRefreshToken) {
        throw new Error('새로운 토큰을 받지 못했습니다.');
      }
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      alert('토큰 갱신 실패: ' + error.message);
    }
  };

  return (
    <div className={styles['token-extension-container']}>
      <span className={styles['token-extension-time']}>
        액세스 토큰 남은 시간: {remainingTime.access !== null ? `${remainingTime.access} 초` : '토큰 없음'} <br />
        리프레시 토큰 남은 시간: {remainingTime.refresh !== null ? `${remainingTime.refresh} 초` : '토큰 없음'}
      </span>
      <button className={styles['token-extension-button']} onClick={handleTokenRefresh}>
        연장
      </button>
    </div>
  );
};

export default TokenExtension;
