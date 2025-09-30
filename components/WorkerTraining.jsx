import React, { useState } from 'react';
import { UserCog, FileText, ShieldCheck, CalendarDays, Award, UploadCloud, Activity } from 'lucide-react';

const phases = [
  { name: 'Safety', progress: 90, description: 'Safety protocols and equipment usage.' },
  { name: 'Collection', progress: 70, description: 'Efficient waste collection methods.' },
  { name: 'Treatment', progress: 55, description: 'Waste treatment and processing.' },
  { name: 'Management', progress: 40, description: 'Facility and resource management.' },
];

const inventory = [
  { item: 'Gloves', qty: 120 },
  { item: 'Masks', qty: 200 },
  { item: 'Boots', qty: 80 },
  { item: 'Safety Vests', qty: 60 },
];

const schedule = [
  { phase: 'Safety', instructor: 'Dr. Rao', date: '2025-09-18' },
  { phase: 'Collection', instructor: 'Ms. Singh', date: '2025-09-21' },
];

export default function WorkerTraining() {
  const [form, setForm] = useState({ name: '', medical: null, photo: null });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalPhase, setModalPhase] = useState(null);

  const handleFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.medical) errs.medical = 'Medical certificate required';
    if (!form.photo) errs.photo = 'Photo required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Worker registration submitted!');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Worker Training Program</h2>
      <form className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400" />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Medical Certificate Upload</label>
          <input type="file" name="medical" accept=".pdf,.jpg,.png" onChange={handleFileChange} className="w-full p-2 rounded-xl border border-gray-300 bg-gray-50" />
          {errors.medical && <span className="text-red-500 text-xs">{errors.medical}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Photo Upload</label>
          <input type="file" name="photo" accept=".jpg,.png" onChange={handleFileChange} className="w-full p-2 rounded-xl border border-gray-300 bg-gray-50" />
          {errors.photo && <span className="text-red-500 text-xs">{errors.photo}</span>}
        </div>
        <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2">
          <UserCog size={20} /> Register Worker
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {phases.map((phase, idx) => (
          <div key={phase.name} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all relative">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-blue-500" size={24} />
              <span className="font-semibold text-lg">{phase.name}</span>
              <button className="ml-auto text-purple-500 hover:underline" onClick={() => { setShowModal(true); setModalPhase(phase); }}>
                <Activity size={18} />
              </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-3 rounded-full" style={{ width: `${phase.progress}%` }}></div>
            </div>
            <span className="text-xs text-gray-500">Progress: {phase.progress}%</span>
          </div>
        ))}
      </div>
      {/* Modal Dialog */}
      {showModal && modalPhase && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-xl font-bold mb-2">{modalPhase.name}</h3>
            <p className="text-gray-700 mb-4">{modalPhase.description}</p>
            <div className="flex items-center gap-2">
              <Award className="text-blue-500" size={20} />
              <span className="font-semibold">Progress: {modalPhase.progress}%</span>
            </div>
          </div>
        </div>
      )}
      {/* Safety Equipment Inventory */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2">Safety Equipment Inventory</h4>
        <div className="grid grid-cols-2 gap-4">
          {inventory.map((item, idx) => (
            <div key={item.item} className="flex flex-col items-center bg-blue-50 rounded-xl p-4 shadow">
              <span className="font-semibold text-blue-600">{item.item}</span>
              <span className="text-lg font-bold">{item.qty}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Training Schedule & Instructor Assignments */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><CalendarDays size={20} /> Training Schedule</h4>
        <ul className="space-y-2">
          {schedule.map((sch, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{sch.date} - {sch.phase}</span>
              <span className="text-xs text-purple-500">Instructor: {sch.instructor}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Progress Tracking & Certification */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2">Certification Progress</h4>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">72%</span>
            <span className="text-xs text-gray-500">Overall Progress</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-purple-600">320</span>
            <span className="text-xs text-gray-500">Certified Workers</span>
          </div>
        </div>
      </div>
      {/* Safety Incident Reporting */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Activity size={20} /> Safety Incident Reporting</h4>
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="Describe incident..." className="p-2 rounded-xl border border-gray-300" />
          <input type="file" className="p-2 rounded-xl border border-gray-300 bg-gray-50" />
          <button type="button" className="bg-blue-500 text-white rounded-xl py-2 px-4 mt-2 shadow hover:bg-blue-600 transition">Report Incident</button>
        </form>
      </div>
    </div>
  );
}
