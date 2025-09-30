import React, { useState } from 'react';
import { Award, Star, Gift, BarChart, Users, Trophy } from 'lucide-react';

const rewards = [
  { name: 'Segregation Star', points: 100, badge: 'Gold' },
  { name: 'Bulk Generator Bonus', points: 250, badge: 'Platinum' },
  { name: 'Green Champion', points: 500, badge: 'Diamond' },
];

const leaderboard = [
  { name: 'Ravi Kumar', points: 1200 },
  { name: 'Priya Singh', points: 1100 },
  { name: 'Amit Patel', points: 1050 },
];

const challenges = [
  { name: 'Plastic Free Week', status: 'Active' },
  { name: 'Compost Challenge', status: 'Completed' },
];

export default function IncentiveSystem() {
  const [showModal, setShowModal] = useState(false);
  const [modalReward, setModalReward] = useState(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Incentive System</h2>
      {/* Rewards & Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {rewards.map((reward, idx) => (
          <div key={reward.name} className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all relative">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="text-yellow-500" size={24} />
              <span className="font-semibold text-lg">{reward.name}</span>
              <button className="ml-auto text-green-500 hover:underline" onClick={() => { setShowModal(true); setModalReward(reward); }}>
                <Star size={18} />
              </button>
            </div>
            <span className="text-xs text-gray-500">Points: {reward.points}</span>
            <span className="text-xs text-yellow-700">Badge: {reward.badge}</span>
          </div>
        ))}
      </div>
      {/* Modal Dialog */}
      {showModal && modalReward && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-xl font-bold mb-2">{modalReward.name}</h3>
            <p className="text-gray-700 mb-4">Points: {modalReward.points}</p>
            <p className="text-yellow-700 mb-2">Badge: {modalReward.badge}</p>
          </div>
        </div>
      )}
      {/* Leaderboard */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><BarChart size={20} /> Leaderboard</h4>
        <ul className="space-y-2">
          {leaderboard.map((user, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{user.name}</span>
              <span className="text-xs text-green-500">{user.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Reward Redemption */}
      <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-xl shadow-lg p-6 mb-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Gift size={20} /> Reward Redemption</h4>
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="Enter reward name..." className="p-2 rounded-xl border border-gray-300" />
          <button type="button" className="bg-yellow-500 text-white rounded-xl py-2 px-4 mt-2 shadow hover:bg-yellow-600 transition">Redeem</button>
        </form>
      </div>
      {/* Community Challenges */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Trophy size={20} /> Community Challenges</h4>
        <ul className="space-y-2">
          {challenges.map((ch, idx) => (
            <li key={idx} className="flex justify-between items-center text-gray-700">
              <span>{ch.name}</span>
              <span className={`text-xs font-bold ${ch.status === 'Active' ? 'text-green-500' : 'text-gray-500'}`}>{ch.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
