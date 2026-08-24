'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { MapPin, ArrowRight } from 'lucide-react';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

type Node = {
  region: string;
  markets: string[];
  tag: string;
  solution: string;
  description: string;
  accent: 'blue' | 'cyan';
  coordinates: [number, number]; // [longitude, latitude]
};

const nodes: Node[] = [
  {
    region: 'Eastern Caribbean',
    markets: ['Jamaica', 'Trinidad & Tobago', 'Barbados', 'Guyana'],
    tag: 'Island Grid Transition',
    solution: 'Marine FSU & Onshore CCGT',
    description:
      'Displacing Heavy Fuel Oil across island utilities with modular floating LNG infrastructure and firm baseload contracts.',
    accent: 'blue',
    coordinates: [-60.5, 12.5],
  },
  {
    region: 'Western Caribbean',
    markets: ['Cayman Islands', 'Belize', 'Honduras', 'Cuba'],
    tag: 'Sovereign Baseload',
    solution: 'FSRU & Virtual Pipeline',
    description:
      'Marine terminal drops and ISO container networks delivering U.S.-sourced LNG to remote coastline and inland grids.',
    accent: 'cyan',
    coordinates: [-83, 18.5],
  },
  {
    region: 'Central America',
    markets: ['Panama', 'Costa Rica', 'Guatemala', 'El Salvador'],
    tag: 'Industrial Supply',
    solution: 'BTM Generation & GSA',
    description:
      'Dedicated behind-the-meter gas supply agreements for industrial parks, free zones, and critical infrastructure operators.',
    accent: 'blue',
    coordinates: [-84, 9.5],
  },
  {
    region: 'Northern South America',
    markets: ['Colombia', 'Venezuela', 'Ecuador', 'Peru'],
    tag: 'Andean Corridor',
    solution: 'CCGT & Regasification',
    description:
      'Onshore regasification terminals and combined cycle plants serving sovereign utilities and mining sector industrials.',
    accent: 'cyan',
    coordinates: [-74, 4],
  },
  {
    region: 'Mexico',
    markets: ['Nuevo León', 'Jalisco', 'Bajío Corridor', 'Yucatán'],
    tag: 'Nearshoring Corridor',
    solution: 'BTM Generation & FSRU',
    description:
      'Private power infrastructure for Tier-1 multinational manufacturers reshoring operations to Mexican industrial corridors.',
    accent: 'blue',
    coordinates: [-102, 23.5],
  },
  {
    region: 'Southern Cone',
    markets: ['Chile', 'Argentina', 'Uruguay', 'Bolivia'],
    tag: 'Southern Supply',
    solution: 'Virtual Pipeline & Minigrid',
    description:
      'Agile ISO container logistics and off-grid LNG micro-grids for mining, agriculture, and remote industrial operations.',
    accent: 'cyan',
    coordinates: [-64, -34],
  },
];

export default function OperationalMap() {
  const [selected, setSelected] = useState<Node>(nodes[0]);

  return (
    <section className="py-24 bg-[#020617] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] rounded uppercase">
            Caribbean &amp; Latin America
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Hemispheric Operational Nodes</h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Explore our footprint across six strategic CALA markets. Select a node on the map to review the regional supply strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 relative bg-[#0a0f1c] border border-slate-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 380, center: [-75, -8] }}
              style={{ width: '100%', height: 'auto' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: '#0f1a2e',
                          stroke: '#1e293b',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#152238',
                          stroke: '#1e293b',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        pressed: { fill: '#152238', outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {nodes.map((node) => {
                const isActive = node.region === selected.region;
                const color = node.accent === 'cyan' ? '#22d3ee' : '#3b82f6';
                return (
                  <Marker
                    key={node.region}
                    coordinates={node.coordinates}
                    onClick={() => setSelected(node)}
                    style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
                  >
                    {isActive && (
                      <circle r={12} fill={color} opacity={0.25}>
                        <animate attributeName="r" from="8" to="18" dur="1.6s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.35" to="0" dur="1.6s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      r={isActive ? 6 : 4}
                      fill={color}
                      stroke="#020617"
                      strokeWidth={1.5}
                      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
                    />
                  </Marker>
                );
              })}
            </ComposableMap>

            <div className="absolute bottom-3 left-4 flex items-center gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> Baseload
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Industrial
              </span>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2 bg-[#0a0f1c] border border-slate-800 rounded-2xl p-8 flex flex-col">
            <div
              className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${
                selected.accent === 'cyan' ? 'text-cyan-500' : 'text-blue-500'
              }`}
            >
              {selected.tag}
            </div>
            <h3 className="text-2xl font-bold text-white leading-snug mb-4 flex items-center gap-2">
              <MapPin
                className={`w-5 h-5 ${selected.accent === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`}
              />
              {selected.region}
            </h3>

            <div
              className={`text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md w-fit mb-5 ${
                selected.accent === 'cyan'
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}
            >
              {selected.solution}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">{selected.description}</p>

            <div className="mb-6">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 mb-2.5">
                Key Markets
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selected.markets.map((m) => (
                  <span
                    key={m}
                    className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-medium tracking-wide"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 mb-3">
                All Nodes
              </div>
              <div className="flex flex-wrap gap-2">
                {nodes.map((node) => {
                  const isActive = node.region === selected.region;
                  return (
                    <button
                      key={node.region}
                      onClick={() => setSelected(node)}
                      className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1.5 rounded-md border transition-colors ${
                        isActive
                          ? node.accent === 'cyan'
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40'
                            : 'bg-blue-500/10 text-blue-300 border-blue-500/40'
                          : 'bg-transparent text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {node.region}
                      {isActive && <ArrowRight className="w-3 h-3" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
