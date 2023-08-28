import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './views/HomePage';
import TranslationPage from './views/TranslationPage';
import ProfilePage from './views/ProfilePage';

const AppRoutes = ({ element, ...rest }) => {
  // const isAuthorized is used to get the state for, if a user is logged in or not, which we make check for when routing to translationPage and ProfilePage
  const isAuthorized = useSelector((state) => state.user.isAuthorized);


// Routes to the pages HomePage, TranslationPage and ProfilePage depending on the state of isAuthorized.
// The Navigate is used to redirect the user to the HomePage if they try to access the TranslationPage or ProfilePage without being logged in.
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<HomePage />} />
            <Route path="/translate" element={isAuthorized ? <TranslationPage /> : <Navigate to ="/" /> } />
            <Route path="/profile" element={isAuthorized ? <ProfilePage /> : <Navigate to ="/" /> } />
        </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;