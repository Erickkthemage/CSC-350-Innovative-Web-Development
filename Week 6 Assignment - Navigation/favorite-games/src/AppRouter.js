// Name: Erick Diaz    Date: 11/23/23

import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamesPage from './components/GamesPage';
import Layout from './components/Layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path="/games" element={<GamesPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
