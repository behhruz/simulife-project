import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessDetail from './page/BusinessDetail';
import BusinessList from './page/BusinessList';
import HomePage from './page/Home';
import SliyanieBiznesovPage from './page/sliyaniyaBiznes';
import BusinessPage from './page/BusinessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sliyaniebiznesov" element={<SliyanieBiznesovPage />} />
        <Route path="/otkritbiznes" element={<BusinessList />}>
          {/* Relative paths for child routes */}
          <Route path="business/:id" element={<BusinessDetail />} />
          <Route path="businesspage/:id" element={<BusinessPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
