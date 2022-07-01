import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation';

import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Products from './Pages/Products/Products';
import FormValidation from './Pages/FormValidation/FormValidation';
import FileUploadPreview from './Pages/FileUploadPreview/FileUploadPreview';
import RestApi from './Pages/RestApi/RestApi';
import ClassBasedLifeCycleHooks from './Pages/ClassBasedLifeCycleHooks/ClassBasedLifeCycleHooks';
import FunctionalLifeCycleHooks from './Pages/FunctionalLifeCycleHooks/FunctionalLifeCycleHooks';
import SimpleTodoCrudOperations from './Pages/SimpleTodoCrudOperations/SimpleTodoCrudOperations';
import ConditionalRendering from './Pages/ConditionalRendering/ConditionalRendering';

const configRouting = (
  <Router>
    <div className='container'>
        { /* navigation */ }
        <div className='row'>
          <div className='col-sm-12'>
            <Navigation />
          </div>
        </div>

        { /* main content */ }
        <div className='row'>
          <div className='col-sm-12'>
            { /* coding goes here */ }
            <Routes>
              <Route exact='true' path='/' element={<Home />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/products' element={<Products />} />
              <Route path='/formvalidation' element={<FormValidation />} />
              <Route path='/fileupload' element={<FileUploadPreview />} />
              <Route path='/restapi' element={<RestApi />} />
              <Route path='/class-based-life-cycle-hooks' element={<ClassBasedLifeCycleHooks />} />
              <Route path='/functional-based-life-cycle-hooks' element={<FunctionalLifeCycleHooks />} />
              <Route path='/simple-todo-crud-operations' element={<SimpleTodoCrudOperations />} />
              <Route path='/conditional-rendering' element={<ConditionalRendering />} />
            </Routes>
          </div>
        </div>

      </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  configRouting
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
