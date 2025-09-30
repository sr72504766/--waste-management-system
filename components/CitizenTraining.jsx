import React, { useState } from 'react';
import { UserPlus, FileText, CalendarDays, Info, UploadCloud } from 'lucide-react';

const trainingModules = [
  { name: 'Waste Segregation', progress: 80, description: 'Learn to separate dry, wet, and hazardous waste.' },
  { name: 'Home Composting', progress: 65, description: 'Turn kitchen waste into compost at home.' },
  { name: 'Plastic Reuse', progress: 50, description: 'Reduce, reuse, and recycle plastics.' },
  { name: 'Hazardous Waste', progress: 30, description: 'Safe disposal of hazardous materials.' },
];

const upcomingSessions = [
  { date: '2025-09-20', topic: 'Plastic Reuse', time: '10:00 AM' },
  { date: '2025-09-22', topic: 'Home Composting', time: '2:00 PM' },
];

export default function CitizenTraining() {
  const [showModal, setShowModal] = useState(false);
  const [modalModule, setModalModule] = useState(null);
  const [form, setForm] = useState({ name: '', aadhar: null, photo: null });
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.aadhar) errs.aadhar = 'Aadhar required';
    if (!form.photo) errs.photo = 'Photo required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Placeholder for registration logic
      alert('Registration submitted!');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Citizen Training Program</h2>
      <form className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400" />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Aadhar Card Upload</label>
          <input type="file" name="aadhar" accept=".pdf,.jpg,.png" onChange={handleFileChange} className="w-full p-2 rounded-xl border border-gray-300 bg-gray-50" />
          {errors.aadhar && <span className="text-red-500 text-xs">{errors.aadhar}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Photo Upload</label>
          <input type="file" name="photo" accept=".jpg,.png" onChange={handleFileChange} className="w-full p-2 rounded-xl border border-gray-300 bg-gray-50" />
          {errors.photo && <span className="text-red-500 text-xs">{errors.photo}</span>}
        </div>
        <button type="submit" className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2">
          <UserPlus size={20} /> Register
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {trainingModules.map((mod, idx) => (
          <div key={mod.name} className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all relative">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-green-500" size={24} />
              <span className="font-semibold text-lg">{mod.name}</span>
              <button className="ml-auto text-blue-500 hover:underline" onClick={() => { setShowModal(true); setModalModule(mod); }}>
                <Info size={18} />
              </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full" style={{ width: `${mod.progress}%` }}></div>
            </div>
            <span className="text-xs text-gray-500">Progress: {mod.progress}%</span>
          </div>
        ))}
      </div>
      {/* Modal Dialog */}
      {showModal && modalModule && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-xl font-bold mb-2">{modalModule.name}</h3>
            <p className="text-gray-700 mb-4">{modalModule.description}</p>
            <div className="flex items-center gap-2">
              {/* Progress icon removed because it does not exist in lucide-react */}
              <span className="font-semibold">Progress: {modalModule.progress}%</span>
            </div>
          </div>
        </div>
      )}
      {/* Statistics Dashboard */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2">Training Completion Rates</h4>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-600">87%</span>
            <span className="text-xs text-gray-500">Overall Completion</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">1200</span>
            <span className="text-xs text-gray-500">Registered Citizens</span>
          </div>
        </div>
      </div>
      {/* Upcoming Training Sessions Calendar */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><CalendarDays size={20} /> Upcoming Training Sessions</h4>
        <ul className="space-y-2">
          {upcomingSessions.map((sess, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{sess.date} - {sess.topic}</span>
              <span className="text-xs text-blue-500">{sess.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
