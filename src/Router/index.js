import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../Page/Home';
import Brand from '../Page/Brand';


export default [
    { path: '/home', element: <Home /> },
    { path: '/brand', element: <Brand /> },
    { path: '/', element: <Navigate to='/home' /> }
];
