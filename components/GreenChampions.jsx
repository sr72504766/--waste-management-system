import React, { useState } from 'react';
import { Award, User, MapPin, BarChart, CheckCircle, AlertCircle, Star, ShieldCheck } from 'lucide-react';

const champions = [
  { name: 'Ravi Kumar', area: 'Residential', rating: 4.8, achievements: ['100% Segregation', 'Zero Violations'], profile: 'Champion in North Zone.' },
  { name: 'Priya Singh', area: 'Commercial', rating: 4.6, achievements: ['Plastic Free Market'], profile: 'Champion in Central Market.' },
  { name: 'Amit Patel', area: 'Industrial', rating: 4.9, achievements: ['Hazardous Waste Control'], profile: 'Champion in Industrial Park.' },
];

const areaAssignments = [
  { area: 'Residential', compliance: 92 },
  { area: 'Commercial', compliance: 85 },
  { area: 'Industrial', compliance: 78 },
];

const leaderboard = [
  { name: 'Amit Patel', points: 980 },
  { name: 'Ravi Kumar', points: 950 },
  { name: 'Priya Singh', points: 920 },
];

export default function GreenChampions() {
  const [showModal, setShowModal] = useState(false);
  const [modalChampion, setModalChampion] = useState(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Green Champions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {champions.map((champ, idx) => (
          <div key={champ.name} className="bg-gradient-to-br from-green-100 to-purple-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all relative">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-purple-500" size={24} />
              <span className="font-semibold text-lg">{champ.name}</span>
              <button className="ml-auto text-green-500 hover:underline" onClick={() => { setShowModal(true); setModalChampion(champ); }}>
                <User size={18} />
              </button>
            </div>
            <span className="text-xs text-gray-500">Area: {champ.area}</span>
            <div className="flex gap-2 mt-2">
              <Star className="text-yellow-400" size={18} />
              <span className="font-bold">{champ.rating}</span>
            </div>
            <div className="mt-2">
              {champ.achievements.map((ach, i) => (
                <span key={i} className="inline-block bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs mr-2 mb-1">{ach}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Modal Dialog */}
      {showModal && modalChampion && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-xl font-bold mb-2">{modalChampion.name}</h3>
            <p className="text-gray-700 mb-4">{modalChampion.profile}</p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-500" size={20} />
              <span className="font-semibold">Achievements:</span>
            </div>
            <ul className="list-disc ml-6 mt-2">
              {modalChampion.achievements.map((ach, i) => (
                <li key={i} className="text-green-700">{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* Area Assignments & Compliance */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2">Area Compliance Monitoring</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {areaAssignments.map((area, idx) => (
            <div key={area.area} className="flex flex-col items-center bg-purple-50 rounded-xl p-4 shadow">
              <span className="font-semibold text-purple-600">{area.area}</span>
              <span className="text-lg font-bold">{area.compliance}%</span>
              <span className="text-xs text-gray-500">Compliance</span>
            </div>
          ))}
        </div>
      </div>
      {/* Leaderboard */}
      <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><BarChart size={20} /> Champion Leaderboard</h4>
        <ul className="space-y-2">
          {leaderboard.map((champ, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{champ.name}</span>
              <span className="text-xs text-purple-500">{champ.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Violation Reporting */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertCircle size={20} /> Violation Reporting</h4>
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="Describe violation..." className="p-2 rounded-xl border border-gray-300" />
          <input type="file" className="p-2 rounded-xl border border-gray-300 bg-gray-50" />
          <button type="button" className="bg-purple-500 text-white rounded-xl py-2 px-4 mt-2 shadow hover:bg-purple-600 transition">Report Violation</button>
        </form>
      </div>
      {/* Champion Application */}
      <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><CheckCircle size={20} /> Champion Application</h4>
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="Full Name" className="p-2 rounded-xl border border-gray-300" />
          <input type="text" placeholder="Area" className="p-2 rounded-xl border border-gray-300" />
          <button type="button" className="bg-green-500 text-white rounded-xl py-2 px-4 mt-2 shadow hover:bg-green-600 transition">Apply</button>
        </form>
      </div>
    </div>
  );
}
