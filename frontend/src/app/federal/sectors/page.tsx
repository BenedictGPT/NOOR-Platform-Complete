'use client';

import { useState } from 'react';
import { Card } from '@/components/federal/Card';
import { Button } from '@/components/federal/Button';

export default function SectorAnalysisPage() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

  // Mock data for sectors
  const sectors = [
    {
      id: 'banking',
      name: 'Banking & Finance',
      icon: '🏦',
      workers: 245000,
      growth: 5.2,
      avgSalary: 18500,
      emiratization: 42,
      color: 'bg-blue-500',
    },
    {
      id: 'tech',
      name: 'Technology',
      icon: '⚙️',
      workers: 189000,
      growth: 12.8,
      avgSalary: 22400,
      emiratization: 28,
      color: 'bg-purple-500',
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: '🏥',
      workers: 312000,
      growth: 3.1,
      avgSalary: 14200,
      emiratization: 38,
      color: 'bg-red-500',
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: '🏗️',
      workers: 456000,
      growth: 2.8,
      avgSalary: 8900,
      emiratization: 12,
      color: 'bg-orange-500',
    },
    {
      id: 'retail',
      name: 'Retail & Hospitality',
      icon: '🛍️',
      workers: 398000,
      growth: 4.5,
      avgSalary: 7200,
      emiratization: 22,
      color: 'bg-green-500',
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      icon: '⛽',
      workers: 178000,
      growth: 1.2,
      avgSalary: 28500,
      emiratization: 52,
      color: 'bg-yellow-600',
    },
    {
      id: 'education',
      name: 'Education',
      icon: '🎓',
      workers: 267000,
      growth: 3.8,
      avgSalary: 12800,
      emiratization: 48,
      color: 'bg-indigo-500',
    },
    {
      id: 'transport',
      name: 'Transportation',
      icon: '✈️',
      workers: 223000,
      growth: 6.2,
      avgSalary: 11400,
      emiratization: 18,
      color: 'bg-cyan-500',
    },
  ];

  // Mock detailed sector data
  const sectorDetails = {
    composition: {
      uaeNationals: 35,
      expats: 65,
      male: 72,
      female: 28,
    },
    ageDistribution: [
      { range: '18-25', percentage: 12 },
      { range: '26-35', percentage: 38 },
      { range: '36-45', percentage: 32 },
      { range: '46-55', percentage: 15 },
      { range: '56+', percentage: 3 },
    ],
    topSkills: [
      { skill: 'Data Analysis', demand: 85 },
      { skill: 'Project Management', demand: 78 },
      { skill: 'Customer Service', demand: 72 },
      { skill: 'Financial Planning', demand: 68 },
      { skill: 'Risk Management', demand: 65 },
    ],
    trends: [
      { month: 'Jan', workers: 230000 },
      { month: 'Feb', workers: 232000 },
      { month: 'Mar', workers: 235000 },
      { month: 'Apr', workers: 237000 },
      { month: 'May', workers: 240000 },
      { month: 'Jun', workers: 242000 },
      { month: 'Jul', workers: 243000 },
      { month: 'Aug', workers: 244000 },
      { month: 'Sep', workers: 245000 },
    ],
  };

  const toggleSectorComparison = (sectorId: string) => {
    if (selectedSectors.includes(sectorId)) {
      setSelectedSectors(selectedSectors.filter((id) => id !== sectorId));
    } else if (selectedSectors.length < 4) {
      setSelectedSectors([...selectedSectors, sectorId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            🏢 Sector-wise Workforce Analysis
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant={comparisonMode ? 'primary' : 'outline'}
              size="sm"
              onClick={() => {
                setComparisonMode(!comparisonMode);
                if (!comparisonMode) setSelectedSectors([]);
              }}
            >
              📊 Compare Sectors
            </Button>
            <Button variant="outline" size="sm">
              📥 Export
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Home &gt; Federal Dashboard &gt; Sector-wise Workforce Analysis
        </p>
      </div>

      {comparisonMode && (
        <Card className="mb-6 p-4 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-900">
                Comparison Mode Active
              </p>
              <p className="text-xs text-blue-700">
                Select up to 4 sectors to compare (
                {selectedSectors.length}/4 selected)
              </p>
            </div>
            {selectedSectors.length >= 2 && (
              <Button variant="primary" size="sm">
                View Comparison →
              </Button>
            )}
          </div>
        </Card>
      )}

      {/* Sector Overview Cards */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          📈 Sector Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector) => (
            <Card
              key={sector.id}
              className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedSector === sector.id
                  ? 'ring-2 ring-[#D4AF37]'
                  : ''
              } ${
                comparisonMode && selectedSectors.includes(sector.id)
                  ? 'ring-2 ring-blue-500'
                  : ''
              }`}
              onClick={() => {
                if (comparisonMode) {
                  toggleSectorComparison(sector.id);
                } else {
                  setSelectedSector(
                    selectedSector === sector.id ? null : sector.id
                  );
                }
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{sector.icon}</span>
                {comparisonMode && (
                  <input
                    type="checkbox"
                    checked={selectedSectors.includes(sector.id)}
                    onChange={() => toggleSectorComparison(sector.id)}
                    className="w-5 h-5"
                  />
                )}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{sector.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Workers:</span>
                  <span className="font-semibold">
                    {(sector.workers / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Growth (YoY):</span>
                  <span
                    className={`font-semibold ${
                      sector.growth > 5
                        ? 'text-green-600'
                        : sector.growth > 2
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    ↑ {sector.growth}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Avg Salary:</span>
                  <span className="font-semibold">
                    AED {sector.avgSalary.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Emiratization:</span>
                  <span className="font-semibold">{sector.emiratization}%</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${sector.color} h-2 rounded-full`}
                    style={{ width: `${sector.emiratization}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Emiratization Progress
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Sector Comparison Chart */}
      {!comparisonMode && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              📊 Workforce Distribution by Sector
            </h3>
            <div className="space-y-3">
              {sectors
                .sort((a, b) => b.workers - a.workers)
                .map((sector) => {
                  const maxWorkers = Math.max(...sectors.map((s) => s.workers));
                  const percentage = (sector.workers / maxWorkers) * 100;
                  return (
                    <div key={sector.id}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{sector.icon}</span>
                          <span className="text-sm font-medium">
                            {sector.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold">
                          {(sector.workers / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${sector.color} h-3 rounded-full transition-all`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              💰 Average Salary by Sector
            </h3>
            <div className="space-y-3">
              {sectors
                .sort((a, b) => b.avgSalary - a.avgSalary)
                .map((sector) => {
                  const maxSalary = Math.max(...sectors.map((s) => s.avgSalary));
                  const percentage = (sector.avgSalary / maxSalary) * 100;
                  return (
                    <div key={sector.id}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{sector.icon}</span>
                          <span className="text-sm font-medium">
                            {sector.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold">
                          AED {sector.avgSalary.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#D4AF37] h-3 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </Card>
        </div>
      )}

      {/* Growth Rate Comparison */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          📈 Year-over-Year Growth Rate
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors
            .sort((a, b) => b.growth - a.growth)
            .map((sector, index) => (
              <div
                key={sector.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                    {sector.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">{sector.name}</p>
                  <p
                    className={`text-lg font-bold ${
                      sector.growth > 5
                        ? 'text-green-600'
                        : sector.growth > 2
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    +{sector.growth}%
                  </p>
                </div>
                {index === 0 && (
                  <span className="text-2xl">🥇</span>
                )}
                {index === 1 && (
                  <span className="text-2xl">🥈</span>
                )}
                {index === 2 && (
                  <span className="text-2xl">🥉</span>
                )}
              </div>
            ))}
        </div>
      </Card>

      {/* Emiratization Performance */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          🇦🇪 Emiratization Performance by Sector
        </h3>
        <div className="space-y-4">
          {sectors
            .sort((a, b) => b.emiratization - a.emiratization)
            .map((sector) => (
              <div key={sector.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{sector.icon}</span>
                    <span className="text-sm font-medium">{sector.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">
                      {sector.emiratization}%
                    </span>
                    {sector.emiratization >= 50 && (
                      <span className="text-green-600 text-xs px-2 py-1 bg-green-100 rounded">
                        ✓ Exceeding
                      </span>
                    )}
                    {sector.emiratization >= 30 &&
                      sector.emiratization < 50 && (
                        <span className="text-yellow-600 text-xs px-2 py-1 bg-yellow-100 rounded">
                          ⚠ On Track
                        </span>
                      )}
                    {sector.emiratization < 30 && (
                      <span className="text-red-600 text-xs px-2 py-1 bg-red-100 rounded">
                        ⚠ Behind
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${
                      sector.emiratization >= 50
                        ? 'bg-green-500'
                        : sector.emiratization >= 30
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${sector.emiratization}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </Card>

      {/* Detailed Sector View */}
      {selectedSector && !comparisonMode && (
        <Card className="mb-6 p-6 border-2 border-[#D4AF37]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">
                {sectors.find((s) => s.id === selectedSector)?.icon}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {sectors.find((s) => s.id === selectedSector)?.name}
                </h3>
                <p className="text-sm text-gray-600">Detailed Analysis</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedSector(null)}
            >
              ✕ Close
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workforce Composition */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Workforce Composition
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>UAE Nationals</span>
                    <span className="font-semibold">
                      {sectorDetails.composition.uaeNationals}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#D4AF37] h-2 rounded-full"
                      style={{
                        width: `${sectorDetails.composition.uaeNationals}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Expats</span>
                    <span className="font-semibold">
                      {sectorDetails.composition.expats}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#1E3A5F] h-2 rounded-full"
                      style={{
                        width: `${sectorDetails.composition.expats}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Male</span>
                    <span className="font-semibold">
                      {sectorDetails.composition.male}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${sectorDetails.composition.male}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Female</span>
                    <span className="font-semibold">
                      {sectorDetails.composition.female}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full"
                      style={{ width: `${sectorDetails.composition.female}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Age Distribution */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Age Distribution
              </h4>
              <div className="space-y-3">
                {sectorDetails.ageDistribution.map((age, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{age.range}</span>
                      <span className="font-semibold">{age.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${age.percentage * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Skills in Demand */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Top Skills in Demand
              </h4>
              <div className="space-y-3">
                {sectorDetails.topSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.skill}</span>
                      <span className="font-semibold">{skill.demand}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${skill.demand}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <Button variant="primary" size="sm">
              📥 Export Sector Report
            </Button>
            <Button variant="outline" size="sm">
              📊 Deep Dive Analysis
            </Button>
            <Button variant="outline" size="sm">
              🔍 View Job Postings
            </Button>
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button variant="primary">📥 Export All Sectors</Button>
        <Button variant="outline">📊 Generate Report</Button>
        <Button variant="outline">⚙️ Configure View</Button>
      </div>
    </div>
  );
}

