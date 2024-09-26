'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_EMPTY = {};

export const AppContext = React.createContext(DEFAULT_EMPTY);

export const AuthProvider = ({ children }) => {
  const [gaUtm, setGaUtm] = useState({});
  const value = useMemo(() => {
    return {
      gaUtm,
      setGaUtm
    };
  }, [
    gaUtm,
    setGaUtm
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useSearchutm = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAuth can only be used inside AuthContext');
  }
  const { gaUtm, setGaUtm } = context
  return { gaUtm, setGaUtm };
};
