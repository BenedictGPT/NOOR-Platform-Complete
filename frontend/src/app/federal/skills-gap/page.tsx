'use client';

import { useState } from 'react';
import { Card } from '@/components/federal/Card';
import { Button } from '@/components/federal/Button';

export default function SkillsGapPage() {
  const [selectedGap, setSelectedGap] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'matrix' | 'heatmap' | 'list'>('matrix');

  // Mock data for skills gaps
  const criticalGaps = [
    {
      id: 'data-science',
      skill: 'Data Scientists',
      shortage: -2450,
      severity: 'critical',
      sector: 'Technology',
      timeToFill: 45,
      avgSalary: 28500,
      demand: 95,
      supply: 35,
    },
    {
      id: 'nurses',
      skill: 'Registered Nurses',
      shortage: -1890,
      severity: 'critical',
      sector: 'Healthcare',
      timeToFill: 38,
      avgSalary: 15200,
      demand: 92,
      supply: 42,
    },
    {
      id: 'solar-tech',
      skill: 'Solar Technicians',
      shortage: -980,
      severity: 'high',
      sector: 'Energy',
      timeToFill: 32,
      avgSalary: 12800,
      demand: 88,
      supply: 48,
    },
    {
      id: 'cybersecurity',
      skill: 'Cybersecurity Experts',
      shortage: -1250,
      severity: 'critical',
      sector: 'Technology',
      timeToFill: 52,
      avgSalary: 32000,
      demand: 96,
      supply: 28,
    },
    {
      id: 'ai-engineers',
      skill: 'AI/ML Engineers',
      shortage: -1680,
      severity: 'critical',
      sector: 'Technology',
      timeToFill: 58,
      avgSalary: 35000,
      demand: 98,
      supply: 22,
    },
    {
      id: 'pharmacists',
      skill: 'Clinical Pharmacists',
      shortage: -720,
      severity: 'high',
      sector: 'Healthcare',
      timeToFill: 28,
      avgSalary: 18500,
      demand: 82,
      supply: 52,
    },
    {
      id: 'civil-engineers',
      skill: 'Civil Engineers',
      shortage: -540,
      severity: 'medium',
      sector: 'Construction',
      timeToFill: 24,
      avgSalary: 16200,
      demand: 75,
      supply: 58,
    },
    {
      id: 'teachers',
      skill: 'STEM Teachers',
      shortage: -890,
      severity: 'high',
      sector: 'Education',
      timeToFill: 35,
      avgSalary: 14500,
      demand: 85,
      supply: 45,
    },
  ];

  // Supply-Demand Matrix quadrants
  const matrixQuadrants = {
    critical: [
      { skill: 'Data Science', demand: 95, supply: 35 },
      { skill: 'Cybersecurity', demand: 96, supply: 28 },
      { skill: 'AI Engineers', demand: 98, supply: 22 },
      { skill: 'Nurses', demand: 92, supply: 42 },
    ],
    healthy: [
      { skill: 'Accounting', demand: 85, supply: 88 },
      { skill: 'HR Management', demand: 78, supply: 82 },
      { skill: 'Marketing', demand: 82, supply: 85 },
      { skill: 'Sales', demand: 80, supply: 84 },
    ],
    niche: [
      { skill: 'Rare Specialists', demand: 25, supply: 18 },
      { skill: 'Legacy Systems', demand: 22, supply: 15 },
      { skill: 'Specialized Trades', demand: 28, supply: 20 },
    ],
    oversupply: [
      { skill: 'General Admin', demand: 35, supply: 92 },
      { skill: 'Basic Data Entry', demand: 28, supply: 88 },
      { skill: 'Reception', demand: 32, supply: 85 },
    ],
  };

  // Training pipeline data
  const trainingPipeline = [
    { stage: 'Identified Need', count: 5000, percentage: 100 },
    { stage: 'Enrolled in Training', count: 3200, percentage: 64 },
    { stage: 'Completed Training', count: 2400, percentage: 48 },
    { stage: 'Certified', count: 1800, percentage: 36 },
    { stage: 'Employed', count: 1200, percentage: 24 },
  ];

  // Resolution strategies
  const resolutionStrategies = [
    {
      skill: 'Data Scientists',
      strategies: [
        { name: 'University Partnerships', impact: 'High', timeline: '2-3 years' },
        { name: 'International Recruitment', impact: 'High', timeline: '3-6 months' },
        { name: 'Upskilling Programs', impact: 'Medium', timeline: '6-12 months' },
      ],
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500';
      case 'high':
        return 'bg-orange-500';
      case 'medium':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical':
        return '🔴 CRITICAL';
      case 'high':
        return '🟠 HIGH';
      case 'medium':
        return '🟡 MEDIUM';
      default:
        return '🔵 LOW';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            🎯 Skills Gap Identification
          </h1>
          <div className="flex items-center gap-4">
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as any)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm"
            >
              <option value="matrix">Supply-Demand Matrix</option>
              <option value="heatmap">Heatmap View</option>
              <option value="list">List View</option>
            </select>
            <Button variant="outline" size="sm">
              📥 Export Report
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Home &gt; Federal Dashboard &gt; Skills Gap Identification
        </p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-red-50 border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 font-semibold">Critical Gaps</p>
              <p className="text-3xl font-bold text-red-900">5</p>
            </div>
            <span className="text-4xl">🔴</span>
          </div>
        </Card>
        <Card className="p-4 bg-orange-50 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-semibold">High Priority</p>
              <p className="text-3xl font-bold text-orange-900">3</p>
            </div>
            <span className="text-4xl">🟠</span>
          </div>
        </Card>
        <Card className="p-4 bg-yellow-50 border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 font-semibold">Medium Priority</p>
              <p className="text-3xl font-bold text-yellow-900">2</p>
            </div>
            <span className="text-4xl">🟡</span>
          </div>
        </Card>
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-semibold">Total Shortage</p>
              <p className="text-3xl font-bold text-blue-900">10.4K</p>
            </div>
            <span className="text-4xl">📊</span>
          </div>
        </Card>
      </div>

      {/* Supply-Demand Matrix */}
      {viewMode === 'matrix' && (
        <Card className="mb-6 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📊 Supply-Demand Matrix
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Critical Quadrant (High Demand, Low Supply) */}
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-red-900">🔴 CRITICAL</h4>
                <span className="text-xs text-red-600">High Demand, Low Supply</span>
              </div>
              <div className="space-y-2">
                {matrixQuadrants.critical.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded text-sm flex items-center justify-between"
                  >
                    <span className="font-medium">{item.skill}</span>
                    <div className="text-xs text-gray-600">
                      D:{item.demand} S:{item.supply}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Healthy Quadrant (High Demand, High Supply) */}
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-green-900">🟢 HEALTHY</h4>
                <span className="text-xs text-green-600">High Demand, High Supply</span>
              </div>
              <div className="space-y-2">
                {matrixQuadrants.healthy.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded text-sm flex items-center justify-between"
                  >
                    <span className="font-medium">{item.skill}</span>
                    <div className="text-xs text-gray-600">
                      D:{item.demand} S:{item.supply}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Niche Quadrant (Low Demand, Low Supply) */}
            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-yellow-900">🟡 NICHE</h4>
                <span className="text-xs text-yellow-600">Low Demand, Low Supply</span>
              </div>
              <div className="space-y-2">
                {matrixQuadrants.niche.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded text-sm flex items-center justify-between"
                  >
                    <span className="font-medium">{item.skill}</span>
                    <div className="text-xs text-gray-600">
                      D:{item.demand} S:{item.supply}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Oversupply Quadrant (Low Demand, High Supply) */}
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-blue-900">🔵 OVERSUPPLY</h4>
                <span className="text-xs text-blue-600">Low Demand, High Supply</span>
              </div>
              <div className="space-y-2">
                {matrixQuadrants.oversupply.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded text-sm flex items-center justify-between"
                  >
                    <span className="font-medium">{item.skill}</span>
                    <div className="text-xs text-gray-600">
                      D:{item.demand} S:{item.supply}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Critical Shortages List */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          ⚠️ Critical Skills Shortages
        </h3>
        <div className="space-y-3">
          {criticalGaps
            .sort((a, b) => a.shortage - b.shortage)
            .map((gap, index) => (
              <div
                key={gap.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedGap === gap.id
                    ? 'border-[#D4AF37] bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() =>
                  setSelectedGap(selectedGap === gap.id ? null : gap.id)
                }
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-gray-400">
                      {index + 1}.
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">{gap.skill}</h4>
                      <p className="text-xs text-gray-600">{gap.sector}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-600">
                        {gap.shortage} workers
                      </p>
                      <p className="text-xs text-gray-600">
                        {getSeverityLabel(gap.severity)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-3">
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-gray-600">Demand</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${gap.demand}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold">{gap.demand}%</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-gray-600">Supply</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${gap.supply}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold">{gap.supply}%</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-gray-600">Avg Time to Fill</p>
                    <p className="text-sm font-semibold">{gap.timeToFill} days</p>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-gray-600">Avg Salary</p>
                    <p className="text-sm font-semibold">
                      AED {gap.avgSalary.toLocaleString()}
                    </p>
                  </div>
                </div>

                {selectedGap === gap.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-semibold text-sm text-gray-700 mb-2">
                      Recommended Actions:
                    </h5>
                    <div className="space-y-2">
                      <Button variant="primary" size="sm" className="w-full">
                        🎓 Launch Training Program
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        🌍 International Recruitment
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        📚 Upskilling Initiative
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </Card>

      {/* Training Pipeline */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          📚 Training to Employment Pipeline
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Conversion rate from identified need to employment
        </p>
        <div className="space-y-4">
          {trainingPipeline.map((stage, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0
                        ? 'bg-blue-500'
                        : index === trainingPipeline.length - 1
                        ? 'bg-green-500'
                        : 'bg-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">{stage.stage}</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    {stage.count.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600">{stage.percentage}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 ml-11">
                <div
                  className={`h-4 rounded-full ${
                    index === 0
                      ? 'bg-blue-500'
                      : index === trainingPipeline.length - 1
                      ? 'bg-green-500'
                      : 'bg-gray-400'
                  }`}
                  style={{ width: `${stage.percentage}%` }}
                />
              </div>
              {index < trainingPipeline.length - 1 && (
                <div className="ml-11 mt-2 text-xs text-red-600">
                  ↓ Drop-off: {trainingPipeline[index].count - trainingPipeline[index + 1].count} (
                  {(
                    ((trainingPipeline[index].count -
                      trainingPipeline[index + 1].count) /
                      trainingPipeline[index].count) *
                    100
                  ).toFixed(0)}
                  %)
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm font-semibold text-yellow-900 mb-1">
            ⚠️ Pipeline Efficiency Alert
          </p>
          <p className="text-xs text-yellow-700">
            Only 24% of identified training needs result in employment. Consider
            improving retention at each stage.
          </p>
        </div>
      </Card>

      {/* Gap Resolution Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            🛠️ Gap Resolution Calculator
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Select Skill Gap
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Data Scientists (-2,450)</option>
                <option>Registered Nurses (-1,890)</option>
                <option>AI/ML Engineers (-1,680)</option>
                <option>Cybersecurity Experts (-1,250)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Resolution Strategy
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Training Programs (6-12 months)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">
                    International Recruitment (3-6 months)
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">University Partnerships (2-3 years)</span>
                </label>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">
                Projected Timeline
              </p>
              <p className="text-2xl font-bold text-blue-900">9-12 months</p>
              <p className="text-xs text-blue-700 mt-1">
                To fill 80% of gap with selected strategies
              </p>
            </div>
            <Button variant="primary" className="w-full">
              Generate Action Plan
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📈 Skills Gap Trends
          </h3>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-red-900">
                  Widening Gaps
                </span>
                <span className="text-xs text-red-600">↑ Increasing</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>AI/ML Engineers</span>
                  <span className="font-semibold text-red-600">+420 (YoY)</span>
                </div>
                <div className="flex justify-between">
                  <span>Cybersecurity</span>
                  <span className="font-semibold text-red-600">+310 (YoY)</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-green-900">
                  Closing Gaps
                </span>
                <span className="text-xs text-green-600">↓ Decreasing</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Accountants</span>
                  <span className="font-semibold text-green-600">-180 (YoY)</span>
                </div>
                <div className="flex justify-between">
                  <span>HR Managers</span>
                  <span className="font-semibold text-green-600">-125 (YoY)</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-yellow-900">
                  Emerging Gaps
                </span>
                <span className="text-xs text-yellow-600">⚠️ New</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Quantum Computing</span>
                  <span className="font-semibold text-yellow-600">New</span>
                </div>
                <div className="flex justify-between">
                  <span>Blockchain Developers</span>
                  <span className="font-semibold text-yellow-600">New</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button variant="primary">📥 Export Skills Gap Report</Button>
        <Button variant="outline">📊 Generate Action Plan</Button>
        <Button variant="outline">🔔 Set Up Alerts</Button>
      </div>
    </div>
  );
}

