import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SyracuseLacrosseStats = () => {
  // Top 10 scorers data
  const topScorers = [
    { name: 'E. Muchnick', goals: 34, assists: 7, points: 41 },
    { name: 'C. Trinkaus', goals: 32, assists: 11, points: 43 },
    { name: 'E. Ward', goals: 30, assists: 46, points: 76 },
    { name: 'A. Vogelman', goals: 21, assists: 6, points: 27 },
    { name: 'M. Cotter', goals: 21, assists: 2, points: 23 },
    { name: 'G. Britton', goals: 20, assists: 10, points: 30 },
    { name: 'J. Caramelli', goals: 16, assists: 4, points: 20 },
    { name: 'M. Guzik', goals: 14, assists: 5, points: 19 },
    { name: 'A. Volpe', goals: 14, assists: 2, points: 16 },
    { name: 'O. Adamson', goals: 10, assists: 6, points: 16 },
  ];

  // Goals by quarter comparison
  const quarterData = [
    { quarter: '1st', syracuse: 74, opponents: 64 },
    { quarter: '2nd', syracuse: 65, opponents: 52 },
    { quarter: '3rd', syracuse: 48, opponents: 45 },
    { quarter: '4th', syracuse: 47, opponents: 59 },
  ];

  // Season results
  const seasonResults = [
    { game: 'UALBANY', result: 'W', margin: 12, color: '#2ecc71' },
    { game: 'Maryland', result: 'W', margin: 6, color: '#2ecc71' },
    { game: 'CORNELL', result: 'W', margin: 8, color: '#2ecc71' },
    { game: 'N. Carolina', result: 'L', margin: -8, color: '#e74c3c' },
    { game: 'N\'WESTERN', result: 'L', margin: -4, color: '#e74c3c' },
    { game: 'CLEMSON', result: 'L', margin: -1, color: '#e74c3c' },
    { game: 'STANFORD', result: 'W', margin: 1, color: '#2ecc71' },
    { game: 'J. HOPKINS', result: 'L', margin: -1, color: '#e74c3c' },
    { game: 'Pitt', result: 'W', margin: 6, color: '#2ecc71' },
    { game: 'Loyola', result: 'W', margin: 2, color: '#2ecc71' },
    { game: 'N. DAME', result: 'W', margin: 1, color: '#2ecc71' },
    { game: 'VIRGINIA', result: 'W', margin: 1, color: '#2ecc71' },
    { game: 'Yale', result: 'L', margin: -3, color: '#e74c3c' },
    { game: 'California', result: 'W', margin: 12, color: '#2ecc71' },
    { game: 'Va Tech', result: 'L', margin: -3, color: '#e74c3c' },
    { game: 'BOSTON C.', result: 'L', margin: -15, color: '#e74c3c' },
    { game: 'Stanford', result: 'L', margin: -5, color: '#e74c3c' },
    { game: 'Brown', result: 'W', margin: 6, color: '#2ecc71' },
    { game: 'Yale', result: 'L', margin: -1, color: '#e74c3c' },
  ];

  const COLORS = ['#f97316', '#3b82f6'];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-orange-500">
          2025 Syracuse Women's Lacrosse
        </h1>
        <p className="text-center text-gray-400 mb-8">Season Statistics Analysis</p>
        
        {/* Record Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-orange-500">10-9</div>
            <div className="text-gray-400">Overall Record</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-green-500">235</div>
            <div className="text-gray-400">Goals Scored</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-red-400">221</div>
            <div className="text-gray-400">Goals Allowed</div>
          </div>
        </div>

        {/* Top Scorers Chart */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Top 10 Scorers - Goals & Assists</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topScorers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis dataKey="name" type="category" stroke="#9ca3af" width={90} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                labelStyle={{ color: '#f97316' }}
              />
              <Legend />
              <Bar dataKey="goals" fill="#f97316" name="Goals" />
              <Bar dataKey="assists" fill="#3b82f6" name="Assists" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Goals by Quarter */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Goals by Quarter: Syracuse vs Opponents</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={quarterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="quarter" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
              />
              <Legend />
              <Bar dataKey="syracuse" fill="#f97316" name="Syracuse" />
              <Bar dataKey="opponents" fill="#6b7280" name="Opponents" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-400 mt-2 text-center">
            ⚠️ Note: Syracuse was outscored 59-47 in the 4th quarter — a key area for improvement
          </p>
        </div>

        {/* Season Timeline */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Season Results Timeline</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={seasonResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="game" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} fontSize={10} />
              <YAxis stroke="#9ca3af" domain={[-20, 15]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                formatter={(value) => [value > 0 ? `+${value}` : value, 'Margin']}
              />
              <Bar dataKey="margin" fill="#f97316">
                {seasonResults.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div> Win
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div> Loss
            </span>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-8 bg-orange-900/30 border border-orange-500/50 rounded-lg p-4">
          <h3 className="font-semibold text-orange-400 mb-2">📊 Key Insight</h3>
          <p className="text-gray-300">
            Syracuse had <strong>three 1-goal losses</strong> (Clemson, Johns Hopkins OT, Yale playoff). 
            Improving 4th-quarter defense—where they were outscored 59-47—could have flipped 2-3 games 
            and resulted in a 12-7 or 13-6 record.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyracuseLacrosseStats;
