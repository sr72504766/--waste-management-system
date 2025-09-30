import React, { useState } from 'react';
import { Camera, MapPin, AlertCircle, BarChart, FileText, CheckCircle } from 'lucide-react';

const violations = [
  { type: 'Littering', location: 'Sector 8', penalty: 500, status: 'Pending', time: '2025-09-13' },
  { type: 'Hazardous Waste', location: 'Sector 2', penalty: 1500, status: 'Resolved', time: '2025-09-12' },
];

export default function ViolationReporting() {
  const [form, setForm] = useState({ photo: null, location: '', type: '', appeal: '' });
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    if (!form.photo) errs.photo = 'Photo required';
    if (!form.location) errs.location = 'Location required';
    if (!form.type) errs.type = 'Violation type required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Violation reported!');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-red-700">Violation Reporting</h2>
      <form className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Photo Upload</label>
          <input type="file" name="photo" accept=".jpg,.png" onChange={handleFileChange} className="w-full p-2 rounded-xl border border-gray-300 bg-gray-50" />
          {errors.photo && <span className="text-red-500 text-xs">{errors.photo}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">GPS Location</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full p-2 rounded-xl border border-gray-300" placeholder="Enter location..." />
          {errors.location && <span className="text-red-500 text-xs">{errors.location}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Violation Type</label>
          <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 rounded-xl border border-gray-300">
            <option value="">Select type</option>
            <option value="Littering">Littering</option>
            <option value="Hazardous Waste">Hazardous Waste</option>
            <option value="Plastic Dumping">Plastic Dumping</option>
            <option value="Other">Other</option>
          </select>
          {errors.type && <span className="text-red-500 text-xs">{errors.type}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Appeal (optional)</label>
          <textarea name="appeal" value={form.appeal} onChange={handleChange} className="w-full p-2 rounded-xl border border-gray-300" placeholder="Enter appeal..."></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2">
          <AlertCircle size={20} /> Report Violation
        </button>
      </form>
      {/* Analytics & Reporting Dashboard */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><BarChart size={20} /> Violation Analytics</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-red-600">2</span>
            <span className="text-xs text-gray-500">Total Violations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-purple-600">1</span>
            <span className="text-xs text-gray-500">Resolved</span>
          </div>
        </div>
      </div>
      {/* Violation List */}
      <div className="bg-gradient-to-r from-red-100 to-purple-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><FileText size={20} /> Violation List</h4>
        <ul className="space-y-2">
          {violations.map((vio, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{vio.time} - {vio.type} ({vio.location})</span>
              <span className={`text-xs font-bold ${vio.status === 'Resolved' ? 'text-green-500' : 'text-red-500'}`}>{vio.status}</span>
              <span className="text-xs text-purple-500">Penalty: ₹{vio.penalty}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Appeal & Resolution Tracking */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><CheckCircle size={20} /> Appeal & Resolution Tracking</h4>
        <ul className="space-y-2">
          <li className="text-green-700">Hazardous Waste appeal resolved.</li>
          <li className="text-red-700">Littering appeal pending.</li>
        </ul>
      </div>
    </div>
  );
}
