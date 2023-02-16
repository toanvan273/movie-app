import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import App from '../App';

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/' ||window.location.pathname === '/movie') {
      navigate('/movie/popular');
    } 
  }, [window.location.pathname]);

  return (
    <App>
      <Outlet />
    </App>
  );
}
