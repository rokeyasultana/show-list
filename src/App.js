import React from 'react';
import './App.css'; 
import routes from "./Routes/Router"
import { RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
 <div>
   <RouterProvider router={routes}/>
 </div>
  );
};

export default App;

