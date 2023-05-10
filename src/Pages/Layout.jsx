import React, { useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindow';

export const Layout = ({ children }) => {
  const [, windowHeight] = useWindowSize();
  useEffect(() => {
    console.log(windowHeight);
  }, [windowHeight]);
  return <div>{children}</div>;
};
