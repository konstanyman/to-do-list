import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import Home from './Home';
import { CalendarView } from '@/components/calendar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Home />} />
          <Route path="calendar" element={<CalendarView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
