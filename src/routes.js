import { Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';
import NonePage from './pages/none-page';
import ListMovie from './pages/list-movie';
import SingleMovie from './pages/single-movie';
import Layout from './layout/Layout';

const RouteContainer = () => (
  <Routes>
    <Route path="/" element={<Layout />} errorElement={<NonePage />}>
      <Route path={'/movie/:page'} element={<ListMovie />} />
      <Route path="*" element={<NonePage />} />
    </Route>
    <Route path={'/single-movie/:id'} element={<SingleMovie />} />
  </Routes>
);

export default RouteContainer;