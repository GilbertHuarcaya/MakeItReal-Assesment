/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import Header from '../Header';

const Layout = () => {
  useEffect(() => {
    const id = setInterval(() => {
      Object.entries(localStorage)
        .filter(([key, value]) => Number(value) > 0)
        .forEach(([key, value]) => {
          localStorage.setItem(key, Number(value) - 1);
        });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
