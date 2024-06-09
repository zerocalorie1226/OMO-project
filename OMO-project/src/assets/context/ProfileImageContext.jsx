import React, { createContext, useState } from 'react';

export const ProfileImageContext = createContext();

export const ProfileImageProvider = ({ children }) => {
  const [profileImageUrl, setProfileImageUrl] = useState("");

  return (
    <ProfileImageContext.Provider value={{ profileImageUrl, setProfileImageUrl }}>
      {children}
    </ProfileImageContext.Provider>
  );
};