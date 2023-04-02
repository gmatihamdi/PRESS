import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {Provider} from 'react-redux';
import store from '../src/store/store.js';
import {BrowserRouter,NavLink, Routes,Route} from 'react-router-dom';

import Login from './components/login/login';
import Homepage from './pages/Homepage';
import userPage from './pages/userPage';

import Pressreder from './componentsPress/Pressreder';
import Homepress from './pages/homepressreader/Homepress';
function App() {
 
  return (
<BrowserRouter>
    <Provider store={store}>
  
        <Routes>
          <Route path='/' element={<Login/>} exact />
          <Route path='*' element={<Homepress/>} exact />
          


          
        </Routes>
 
    </Provider>
    </BrowserRouter>
  );
}

export default App;
