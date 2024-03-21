import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route as Route6, Switch } from 'react-router';

import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route6 path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
