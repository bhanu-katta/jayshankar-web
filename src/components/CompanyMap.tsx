import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Industrial Park',
    state: 'Chhattisgarh',
    x: '44%',
    y: '62%',
    color: 'bg-gold-500',
  },
  {
    name: 'Pulp & Paper',
    state: 'Chhattisgarh',
    x: '48%',
    y: '65%',
    color: 'bg-accent-500',
  },
  {
    name: 'Power & Infrastructure',
    state: 'Multiple',
    x: '60%',
    y: '40%',
    color: 'bg-navy-700',
  },
  {
    name: 'ODALAREVU RLNG',
    state: 'Andhra Pradesh',
    x: '70%',
    y: '80%',
    color: 'bg-green-500',
  },
];

const IndiaSVG = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain rounded-xl shadow-lg bg-white">
    <g>
      <path d="M 100 50 Q 120 80 110 120 Q 130 140 120 180 Q 140 200 130 240 Q 150 260 140 300 Q 180 320 200 350 Q 220 320 260 300 Q 250 260 270 240 Q 260 200 280 180 Q 270 140 290 120 Q 280 80 300 50 Q 250 60 200 40 Q 150 60 100 50 Z" fill="#e5e7eb" stroke="#cbd5e1" strokeWidth="2" />
    </g>
  </svg>
);

const CompanyMap = () => (
  <section className="py-16 bg-white animate-fade-in" style={{ animationDelay: '0.03s', animationDuration: '1.2s', animationFillMode: 'both' }}>
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Company Locations</h2>
      <div className="relative w-full max-w-2xl mx-auto aspect-[4/3]">
        {/* Inline SVG India Map */}
        <IndiaSVG />
        {locations.map((loc, idx) => (
          <div
            key={loc.name}
            className={`absolute flex flex-col items-center group`}
            style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
          >
            <span className={`rounded-full p-2 shadow-lg ${loc.color} text-white`}>
              <MapPin className="w-5 h-5" />
            </span>
            <span className="mt-2 text-xs bg-white/90 px-2 py-1 rounded shadow text-navy-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {loc.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {locations.map((loc) => (
          <div key={loc.name} className="flex items-center gap-2 text-sm">
            <span className={`inline-block w-3 h-3 rounded-full ${loc.color}`}></span>
            <span className="text-gray-700 font-medium">{loc.name} <span className="text-gray-400">({loc.state})</span></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyMap; 