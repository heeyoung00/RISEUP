import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

import Main from './RISEUP/RISEUP_Main/FestivalPage.jsx'
import Menu from './RISEUP/RISEUP_Main/FestivalPage_Menu.jsx'
import TimeTable from './RISEUP/RISEUP_Main/FestivalPage_TimeTable.jsx'
import LineUp from './RISEUP/RISEUP_Main/FestivalPage_LineUp.jsx'
import PurposeHistory from './RISEUP/RISEUP_Main/PurposeHistory.jsx'
import About from './RISEUP/RISEUP_Main/FestivalPage_About.jsx'
import Footer from './RISEUP/RISEUP_Main/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div><Main /><Menu /><PurposeHistory/><TimeTable /><LineUp /><About /><Footer /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
