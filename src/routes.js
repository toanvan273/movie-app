import { Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';
import NonePage from './pages/none-page';
import ListMovie from './pages/list-movie';
import SingleMovie from './pages/single-movie';

const RouteContainer = () => (
  <Routes>
    <Route path="/" element={<App />} errorElement={<NonePage />}>
      <Route path={'/movie/:page'} element={<ListMovie />} />
      <Route path={'/single-movie/:id'} element={<SingleMovie />} />
      <Route path="*" element={<NonePage />} />
    </Route>
  </Routes>
);

export default RouteContainer;