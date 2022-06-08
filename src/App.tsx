import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import HomeRoute from './routes/home/HomeRoute';
import FormRoute from './routes/form/FormRoute';
import GridARoute from './routes/grida/GridA'
function App() {
  return (
    <div className="App">
      <nav>
        <Routes>
          <Route path="/" element={<HomeRoute />}></Route>
          <Route path="/form" element={<FormRoute />}></Route>
          <Route path="/grida" element={<GridARoute></GridARoute>}></Route>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
