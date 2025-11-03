'use client';

import { useState } from 'react';
import { Card } from '@/components/federal/Card';
import { Button } from '@/components/federal/Button';

export default function RegionalMappingPage() {
  const [selectedEmirate, setSelectedEmirate] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState('talent');

  // Mock data for emirates
  const emirates = [
    {
      id: 'abudhabi',
      name: 'Abu Dhabi',
      workers: 1450000,
      density: 'high',
      growth: 4.2,
      majorEmployers: 245,
      educationCenters: 89,
      industrialZones: 34,
      color: '#1E3A5F',
    },
    {
      id: 'dubai',
      name: 'Dubai',
      workers: 2100000,
      density: 'high',
      growth: 5.8,
      majorEmployers: 412,
      educationCenters: 156,
      industrialZones: 67,
      color: '#D4AF37',
    },
    {
      id: 'sharjah',
      name: 'Sharjah',
      workers: 890000,
      density: 'medium',
      growth: 3.5,
      majorEmployers: 178,
      educationCenters: 78,
      industrialZones: 45,
      color: '#8B4513',
    },
    {
      id: 'ajman',
      name: 'Ajman',
      workers: 245000,
      density: 'medium',
      growth: 2.8,
      majorEmployers: 56,
      educationCenters: 23,
      industrialZones: 12,
      color: '#4A5568',
    },
    {
      id: 'uaq',
      name: 'Umm Al Quwain',
      workers: 156000,
      density: 'low',
      growth: 2.1,
      majorEmployers: 34,
      educationCenters: 15,
      industrialZones: 8,
      color: '#718096',
    },
    {
      id: 'rak',
      name: 'Ras Al Khaimah',
      workers: 312000,
      density: 'medium',
      growth: 3.2,
      majorEmployers: 89,
      educationCenters: 42,
      industrialZones: 23,
      color: '#2D3748',
    },
    {
      id: 'fujairah',
      name: 'Fujairah',
      workers: 198000,
      density: 'low',
      growth: 2.5,
      majorEmployers: 45,
      educationCenters: 28,
      industrialZones: 15,
      color: '#1A202C',
    },
  ];

  // Mock commuter flow data
  const commuterFlows = [
    { from: 'Sharjah', to: 'Dubai', workers: 125000, percentage: 14 },
    { from: 'Ajman', to: 'Dubai', workers: 45000, percentage: 18 },
    { from: 'Sharjah', to: 'Abu Dhabi', workers: 32000, percentage: 3.6 },
    { from: 'RAK', to: 'Dubai', workers: 28000, percentage: 9 },
    { from: 'Fujairah', to: 'Dubai', workers: 18000, percentage: 9.1 },
  ];

  // Mock top employers by emirate
  const topEmployers = {
    abudhabi: [
      { name: 'ADNOC', employees: 45000, sector: 'Oil & Gas' },
      { name: 'Mubadala', employees: 28000, sector: 'Investment' },
      { name: 'ADIA', employees: 18000, sector: 'Finance' },
    ],
    dubai: [
      { name: 'Emirates Group', employees: 62000, sector: 'Aviation' },
      { name: 'Dubai Municipality', employees: 35000, sector: 'Government' },
      { name: 'Emaar Properties', employees: 28000, sector: 'Real Estate' },
    ],
    sharjah: [
      { name: 'Sharjah Govt', employees: 22000, sector: 'Government' },
      { name: 'Air Arabia', employees: 15000, sector: 'Aviation' },
      { name: 'Crescent Group', employees: 12000, sector: 'Petroleum' },
    ],
  };

  const getDensityColor = (density: string) => {
    switch (density) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDensityLabel = (density: string) => {
    switch (density) {
      case 'high':
        return 'High Density';
      case 'medium':
        return 'Medium Density';
      case 'low':
        return 'Low Density';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            🗺️ Regional Talent Mapping
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              📥 Export Map
            </Button>
            <Button variant="outline" size="sm">
              🖨️ Print
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Home &gt; Federal Dashboard &gt; Regional Talent Mapping
        </p>
      </div>

      {/* Layer Controls */}
      <Card className="mb-6 p-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-semibold text-gray-700">
            Map Layers:
          </span>
          <div className="flex gap-2">
            <Button
              variant={activeLayer === 'talent' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveLayer('talent')}
            >
              👥 Talent Density
            </Button>
            <Button
              variant={activeLayer === 'employers' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveLayer('employers')}
            >
              🏢 Major Employers
            </Button>
            <Button
              variant={activeLayer === 'education' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveLayer('education')}
            >
              🎓 Education Centers
            </Button>
            <Button
              variant={activeLayer === 'industrial' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveLayer('industrial')}
            >
              🏭 Industrial Zones
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Interactive Map */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            🇦🇪 UAE Workforce Heat Map
          </h3>

          {/* Simplified UAE Map Representation */}
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 min-h-[500px]">
            {/* Map Legend */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
              <p className="text-xs font-semibold text-gray-700 mb-2">
                Talent Density
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-xs">High (&gt;1M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-xs">Medium (200K-1M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-xs">Low (&lt;200K)</span>
                </div>
              </div>
            </div>

            {/* Emirate Markers */}
            <div className="relative h-full">
              {/* Abu Dhabi */}
              <div
                className="absolute left-[15%] top-[40%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('abudhabi')}
              >
                <div
                  className={`w-24 h-24 rounded-full ${getDensityColor(
                    'high'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">Abu Dhabi</p>
                    <p className="text-lg font-bold">1.45M</p>
                  </div>
                </div>
              </div>

              {/* Dubai */}
              <div
                className="absolute left-[45%] top-[35%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('dubai')}
              >
                <div
                  className={`w-32 h-32 rounded-full ${getDensityColor(
                    'high'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">Dubai</p>
                    <p className="text-xl font-bold">2.10M</p>
                  </div>
                </div>
              </div>

              {/* Sharjah */}
              <div
                className="absolute left-[55%] top-[25%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('sharjah')}
              >
                <div
                  className={`w-20 h-20 rounded-full ${getDensityColor(
                    'medium'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">Sharjah</p>
                    <p className="text-sm font-bold">890K</p>
                  </div>
                </div>
              </div>

              {/* Ajman */}
              <div
                className="absolute left-[60%] top-[20%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('ajman')}
              >
                <div
                  className={`w-16 h-16 rounded-full ${getDensityColor(
                    'medium'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">Ajman</p>
                    <p className="text-xs font-bold">245K</p>
                  </div>
                </div>
              </div>

              {/* UAQ */}
              <div
                className="absolute left-[65%] top-[15%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('uaq')}
              >
                <div
                  className={`w-14 h-14 rounded-full ${getDensityColor(
                    'low'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">UAQ</p>
                    <p className="text-xs font-bold">156K</p>
                  </div>
                </div>
              </div>

              {/* RAK */}
              <div
                className="absolute left-[70%] top-[10%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('rak')}
              >
                <div
                  className={`w-18 h-18 rounded-full ${getDensityColor(
                    'medium'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">RAK</p>
                    <p className="text-sm font-bold">312K</p>
                  </div>
                </div>
              </div>

              {/* Fujairah */}
              <div
                className="absolute left-[75%] top-[40%] cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setSelectedEmirate('fujairah')}
              >
                <div
                  className={`w-16 h-16 rounded-full ${getDensityColor(
                    'low'
                  )} opacity-70 hover:opacity-90 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <p className="text-xs font-bold">Fujairah</p>
                    <p className="text-xs font-bold">198K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Click on any emirate to view detailed information
          </p>
        </Card>

        {/* Emirate Statistics */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📊 Emirate Statistics
          </h3>
          <div className="space-y-4">
            {emirates.map((emirate) => (
              <div
                key={emirate.id}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedEmirate === emirate.id
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedEmirate(emirate.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    {emirate.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      emirate.density === 'high'
                        ? 'bg-red-100 text-red-800'
                        : emirate.density === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {getDensityLabel(emirate.density)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-600">Workers:</span>
                    <p className="font-semibold">
                      {(emirate.workers / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Growth:</span>
                    <p className="font-semibold text-green-600">
                      +{emirate.growth}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Detailed Emirate View */}
      {selectedEmirate && (
        <Card className="mb-6 p-6 border-2 border-[#D4AF37]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {emirates.find((e) => e.id === selectedEmirate)?.name} - Detailed
              Analysis
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedEmirate(null)}
            >
              ✕ Close
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Workers</p>
              <p className="text-2xl font-bold text-gray-900">
                {(
                  emirates.find((e) => e.id === selectedEmirate)?.workers! /
                  1000
                ).toFixed(0)}
                K
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Major Employers</p>
              <p className="text-2xl font-bold text-gray-900">
                {emirates.find((e) => e.id === selectedEmirate)?.majorEmployers}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Education Centers</p>
              <p className="text-2xl font-bold text-gray-900">
                {
                  emirates.find((e) => e.id === selectedEmirate)
                    ?.educationCenters
                }
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Industrial Zones</p>
              <p className="text-2xl font-bold text-gray-900">
                {
                  emirates.find((e) => e.id === selectedEmirate)
                    ?.industrialZones
                }
              </p>
            </div>
          </div>

          {/* Top Employers */}
          {topEmployers[selectedEmirate as keyof typeof topEmployers] && (
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Top Employers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topEmployers[
                  selectedEmirate as keyof typeof topEmployers
                ].map((employer, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        {employer.name}
                      </span>
                      {index === 0 && <span className="text-xl">🥇</span>}
                      {index === 1 && <span className="text-xl">🥈</span>}
                      {index === 2 && <span className="text-xl">🥉</span>}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {employer.sector}
                    </p>
                    <p className="text-lg font-bold text-[#D4AF37]">
                      {employer.employees.toLocaleString()} employees
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Commuter Flow Analysis */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          🔄 Inter-Emirate Commuter Flow
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Daily workforce movement between emirates
        </p>
        <div className="space-y-4">
          {commuterFlows.map((flow, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    {flow.from}
                  </span>
                  <span className="text-gray-400">→</span>
                  <span className="text-sm font-medium text-gray-900">
                    {flow.to}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {flow.workers.toLocaleString()} workers
                  </p>
                  <p className="text-xs text-gray-500">
                    {flow.percentage}% of {flow.from} workforce
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#D4AF37] h-3 rounded-full"
                  style={{ width: `${flow.percentage * 5}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button variant="primary">📥 Export Regional Data</Button>
        <Button variant="outline">📊 Generate Report</Button>
        <Button variant="outline">🗺️ Download Map</Button>
      </div>
    </div>
  );
}

