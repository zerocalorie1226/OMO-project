import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import styles from './TokenExtension.module.css';

const TokenExtension = () => {
  const [remainingTime, setRemainingTime] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    if (token) {
      const expirationTime = getTokenExpiration(token);
      if (expirationTime) {
        updateRemainingTime(expirationTime);
        const intervalId = setInterval(() => {
          updateRemainingTime(expirationTime);
        }, 1000);
        return () => clearInterval(intervalId);
      }
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const expirationTime = getTokenExpiration(token);
      if (expirationTime) {
        updateRemainingTime(expirationTime); // 초기 상태 설정
      }
    }
  }, [token]);

  const getTokenExpiration = (token) => {
    try {
      const { exp } = jwtDecode(token);
      return exp * 1000; // 밀리초 단위로 변환
    } catch (error) {
      console.error('토큰 디코딩 실패:', error);
      return null;
    }
  };

  const updateRemainingTime = (expirationTime) => {
    const currentTime = Date.now();
    const timeLeft = expirationTime - currentTime;
    if (timeLeft <= 0) {
      alert('로그아웃 됐습니다.');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setToken(null);
      setRemainingTime(null);
      window.location.reload(); // 페이지 새로고침
    } else {
      setRemainingTime(Math.floor(timeLeft / 1000)); // 초 단위로 변환
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
          Authorization: accessToken,
          Refresh: refreshToken,
        },
      });

      const newAccessToken = response.headers.authorization;
      const newRefreshToken = response.headers.refresh;
      if (!newAccessToken || !newRefreshToken) {
        throw new Error('새로운 토큰을 받지 못했습니다.');
      }
      console.log(response);
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      setToken(newAccessToken);
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      alert('토큰 갱신 실패: ' + error.message);
    }
  };

  return (
    <div className={styles['token-extension-container']}>
      <span className={styles['token-extension-time']}>
        남은 시간: {remainingTime !== null ? `${remainingTime} 초` : '토큰 없음'}
      </span>
      <button className={styles['token-extension-button']} onClick={handleTokenRefresh}>
        연장
      </button>
    </div>
  );
};

export default TokenExtension;
