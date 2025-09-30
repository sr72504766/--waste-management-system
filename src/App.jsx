import React, { useState } from 'react';
import './App.css';
import { BarChart, Award, Building2, PlusCircle, Activity, User, UserPlus } from 'lucide-react';

import CitizenTraining from '../components/CitizenTraining';
import WorkerTraining from '../components/WorkerTraining';
import GreenChampions from '../components/GreenChampions';
import SmartMonitoring from '../components/SmartMonitoring';
import WasteFacilities from '../components/WasteFacilities';
import IncentiveSystem from '../components/IncentiveSystem';
import ViolationReporting from '../components/ViolationReporting';

import './App.css';

const stats = [
  { label: 'Total Citizens', value: 12000, icon: <UserPlus className="stat-icon green" size={32} /> },
  { label: 'Segregation Rate', value: '87%', icon: <BarChart className="stat-icon blue" size={32} /> },
  { label: 'Green Champions', value: 42, icon: <Award className="stat-icon purple" size={32} /> },
  { label: 'Active Facilities', value: 15, icon: <Building2 className="stat-icon yellow" size={32} /> },
];

const modules = [
  { name: 'Citizen Training', component: <CitizenTraining />, gradient: 'green-blue', icon: <User size={28} /> },
  { name: 'Worker Training', component: <WorkerTraining />, gradient: 'blue-purple', icon: <Activity size={28} /> },
  { name: 'Green Champions', component: <GreenChampions />, gradient: 'green-purple', icon: <Award size={28} /> },
  { name: 'Smart Monitoring', component: <SmartMonitoring />, gradient: 'blue-green', icon: <BarChart size={28} /> },
  { name: 'Waste Facilities', component: <WasteFacilities />, gradient: 'purple-blue', icon: <Building2 size={28} /> },
  { name: 'Incentive System', component: <IncentiveSystem />, gradient: 'green-yellow', icon: <PlusCircle size={28} /> },
  { name: 'Violation Reporting', component: <ViolationReporting />, gradient: 'red-purple', icon: <Activity size={28} /> },
];

const recentActivities = [
  { text: 'New citizen registered for training', time: '2 min ago' },
  { text: 'Green Champion reported violation', time: '10 min ago' },
  { text: 'Facility maintenance scheduled', time: '30 min ago' },
  { text: 'Bulk waste generator redeemed points', time: '1 hr ago' },
];

export default function App() {
  const [activeModule, setActiveModule] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">EcoManage Pro</h1>
        <p className="subtitle">Comprehensive Waste Management & Citizen Training System</p>
      </header>

      <main className="main-content">
        {/* Statistics */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              {stat.icon}
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div className="modules-grid">
          {modules.map((mod, idx) => (
            <button
              key={mod.name}
              className={`module-card ${mod.gradient}`}
              onClick={() => setActiveModule(idx)}
            >
              <div className="module-icon">{mod.icon}</div>
              <span className="module-name">{mod.name}</span>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-btn white">
            <PlusCircle size={20} /> Register Citizen
          </button>
          <button className="action-btn white">
            <Activity size={20} /> Report Violation
          </button>
        </div>

        {/* Recent Activities */}
        <div className="activities-card">
          <h2 className="activities-title">Recent Activities</h2>
          <ul>
            {recentActivities.map((act, idx) => (
              <li key={idx} className="activity-item">
                <span>{act.text}</span>
                <span className="time">{act.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Active Module */}
        {activeModule !== null && (
          <div className="module-view fade-in">
            {modules[activeModule].component}
          </div>
        )}
      </main>

      <footer className="footer">&copy; 2025 EcoManage Pro. All rights reserved.</footer>
    </div>
  );
}
