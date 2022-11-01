import React from 'react';
import routes from './Router'
import { useLocation, useRoutes } from 'react-router-dom';
import Header from './Format/header';
import "./Style/main.css"
import MotoData from './FirebaseData/MotoData';
import { useDispatch } from 'react-redux';
import { Brand } from './Redux/Action/Brand';

const App = () => {
  const element=useRoutes(routes)
  //GetFirebaseData
  MotoData()

  const {pathname}=useLocation()
  const dispatch = useDispatch()
  if(pathname !== "/brand") {
    dispatch(Brand(""))
  }
  return (
    <div>
      <Header/>
      {element}
    </div>
  );
}

export default App;
