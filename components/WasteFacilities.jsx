import React, { useState } from 'react';
import { Building2, BarChart, CalendarDays, Wrench, MapPin, Leaf } from 'lucide-react';

const facilities = [
  { name: 'Bio-Methanization Plant', location: 'Sector 5', capacity: '20T/day', utilization: 85, status: 'Operational' },
  { name: 'W-to-E Plant', location: 'Sector 9', capacity: '50T/day', utilization: 70, status: 'Maintenance' },
  { name: 'Recycling Center', location: 'Sector 3', capacity: '15T/day', utilization: 95, status: 'Operational' },
];

const maintenance = [
  { facility: 'W-to-E Plant', date: '2025-09-19', equipment: 'Conveyor Belt', status: 'Scheduled' },
];

const envData = [
  { metric: 'Air Quality', value: 'Good', color: 'text-green-500' },
  { metric: 'Water Quality', value: 'Moderate', color: 'text-yellow-500' },
  { metric: 'Noise Level', value: 'Low', color: 'text-green-500' },
];

export default function WasteFacilities() {
  const [showModal, setShowModal] = useState(false);
  const [modalFacility, setModalFacility] = useState(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Waste Facilities</h2>
      {/* Facility Management */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {facilities.map((fac, idx) => (
          <div key={fac.name} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all relative">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="text-blue-500" size={24} />
              <span className="font-semibold text-lg">{fac.name}</span>
              <button className="ml-auto text-purple-500 hover:underline" onClick={() => { setShowModal(true); setModalFacility(fac); }}>
                <BarChart size={18} />
              </button>
            </div>
            <span className="text-xs text-gray-500">Location: {fac.location}</span>
            <span className="text-xs text-blue-500">Capacity: {fac.capacity}</span>
            <span className="text-xs text-green-700">Utilization: {fac.utilization}%</span>
            <span className={`text-xs font-bold ${fac.status === 'Operational' ? 'text-green-500' : 'text-yellow-500'}`}>Status: {fac.status}</span>
          </div>
        ))}
      </div>
      {/* Modal Dialog */}
      {showModal && modalFacility && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-xl font-bold mb-2">{modalFacility.name}</h3>
            <p className="text-gray-700 mb-4">Location: {modalFacility.location}</p>
            <p className="text-gray-700 mb-2">Capacity: {modalFacility.capacity}</p>
            <p className="text-gray-700 mb-2">Utilization: {modalFacility.utilization}%</p>
            <p className="text-gray-700 mb-2">Status: {modalFacility.status}</p>
          </div>
        </div>
      )}
      {/* Maintenance Scheduling */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><CalendarDays size={20} /> Maintenance Scheduling</h4>
        <ul className="space-y-2">
          {maintenance.map((mnt, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{mnt.date} - {mnt.facility}</span>
              <span className="text-xs text-blue-500">Equipment: {mnt.equipment}</span>
              <span className={`text-xs font-bold ${mnt.status === 'Scheduled' ? 'text-yellow-500' : 'text-green-500'}`}>{mnt.status}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Environmental Monitoring */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Leaf size={20} /> Environmental Monitoring</h4>
        <div className="flex gap-6">
          {envData.map((env, idx) => (
            <div key={env.metric} className="flex flex-col items-center">
              <span className={`text-2xl font-bold ${env.color}`}>{env.value}</span>
              <span className="text-xs text-gray-500">{env.metric}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Facility Location Mapping */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><MapPin size={20} /> Facility Location Mapping</h4>
        <div className="grid grid-cols-3 gap-4">
          {facilities.map((fac, idx) => (
            <div key={fac.name} className="flex flex-col items-center bg-blue-50 rounded-xl p-4 shadow">
              <span className="font-semibold text-blue-600">{fac.name}</span>
              <span className="text-xs text-gray-500">{fac.location}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Performance Metrics Dashboard */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><BarChart size={20} /> Performance Metrics</h4>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">85%</span>
            <span className="text-xs text-gray-500">Avg. Utilization</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-600">3</span>
            <span className="text-xs text-gray-500">Facilities Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
