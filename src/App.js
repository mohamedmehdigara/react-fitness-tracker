import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GoalList from './components/GoalList';
import ChallengeList from './components/ChallengeList';
import ProgressChart from './components/ProgressChart';
import GoalForm from "./components/GoalForm";
import ChallengeForm from "./components/ChallengeForm";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GoalList/>} />
        <Route path="/challenges" element={<ChallengeList/>} />
        <Route path="/progress" element={<ProgressChart/>} />
        <Route exact path="/" element={<ChallengeForm/>} />
        <Route exact path="/" element={<GoalForm/>} />
        <Route exact path="/" element={<Navbar/>} />
        <Route exact path="/" element={<Dashboard/>} />



      </Routes>
    </Router>
  );
}

export default App;
