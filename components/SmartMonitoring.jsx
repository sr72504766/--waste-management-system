import React, { useState } from 'react';
import { Map, Truck, Camera, QrCode, AlertCircle, Bell } from 'lucide-react';

const vehicles = [
  { id: 'V001', location: 'Sector 12', status: 'Active', route: 'Route A' },
  { id: 'V002', location: 'Sector 7', status: 'Idle', route: 'Route B' },
];

const bins = [
  { id: 'BIN101', location: 'Park Lane', status: 'Full' },
  { id: 'BIN102', location: 'Market Road', status: 'Empty' },
];

export default function SmartMonitoring() {
  const [showModal, setShowModal] = useState(false);
  const [modalVehicle, setModalVehicle] = useState(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Smart Monitoring</h2>
      {/* Vehicle Tracking */}
      <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Map size={20} /> Vehicle Tracking</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vehicles.map((veh, idx) => (
            <div key={veh.id} className="flex flex-col items-center bg-blue-50 rounded-xl p-4 shadow hover:shadow-xl transition">
              <Truck className="text-green-500 mb-2" size={28} />
              <span className="font-semibold">{veh.id}</span>
              <span className="text-xs text-gray-500">Location: {veh.location}</span>
              <span className="text-xs text-blue-500">Status: {veh.status}</span>
              <span className="text-xs text-green-700">Route: {veh.route}</span>
              <button className="mt-2 text-blue-500 hover:underline" onClick={() => { setShowModal(true); setModalVehicle(veh); }}>
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal Dialog */}
      {showModal && modalVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-xl font-bold mb-2">Vehicle {modalVehicle.id}</h3>
            <p className="text-gray-700 mb-4">Location: {modalVehicle.location}</p>
            <p className="text-gray-700 mb-2">Status: {modalVehicle.status}</p>
            <p className="text-gray-700 mb-2">Route: {modalVehicle.route}</p>
          </div>
        </div>
      )}
      {/* Bin QR Scanning */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><QrCode size={20} /> Waste Bin QR Scanning</h4>
        <div className="grid grid-cols-2 gap-4">
          {bins.map((bin, idx) => (
            <div key={bin.id} className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow">
              <span className="font-semibold text-green-600">{bin.id}</span>
              <span className="text-xs text-gray-500">Location: {bin.location}</span>
              <span className={`text-xs font-bold ${bin.status === 'Full' ? 'text-red-500' : 'text-green-500'}`}>Status: {bin.status}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Violation Reporting */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Camera size={20} /> Photo-based Violation Reporting</h4>
        <form className="flex flex-col gap-2">
          <input type="file" className="p-2 rounded-xl border border-gray-300 bg-gray-50" />
          <input type="text" placeholder="Describe violation..." className="p-2 rounded-xl border border-gray-300" />
          <button type="button" className="bg-blue-500 text-white rounded-xl py-2 px-4 mt-2 shadow hover:bg-blue-600 transition">Report Violation</button>
        </form>
      </div>
      {/* Automated Alerts */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Bell size={20} /> Automated Alerts</h4>
        <ul className="space-y-2">
          <li className="text-green-700">Vehicle V001 completed route.</li>
          <li className="text-blue-700">Bin BIN101 needs emptying.</li>
        </ul>
      </div>
    </div>
  );
}
