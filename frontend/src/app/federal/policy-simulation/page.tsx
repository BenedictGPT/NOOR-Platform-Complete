'use client';

import { useState } from 'react';
import { Card } from '@/components/federal/Card';
import { Button } from '@/components/federal/Button';

interface PolicyLever {
  id: string;
  name: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  impact: 'high' | 'medium' | 'low';
}

interface Scenario {
  id: string;
  name: string;
  description: string;
  levers: Record<string, number>;
  projections: {
    gdp: number;
    employment: number;
    businessCosts: number;
    emiratization: number;
  };
}

export default function PolicySimulationPage() {
  const [activeScenario, setActiveScenario] = useState<string>('current');
  const [savedScenarios, setSavedScenarios] = useState<Scenario[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Policy levers
  const [policyLevers, setPolicyLevers] = useState<PolicyLever[]>([
    {
      id: 'emiratization',
      name: 'Emiratization Quota',
      value: 4.5,
      min: 0,
      max: 10,
      unit: '%',
      impact: 'high',
    },
    {
      id: 'minWage',
      name: 'Minimum Wage',
      value: 5000,
      min: 3000,
      max: 8000,
      unit: 'AED',
      impact: 'high',
    },
    {
      id: 'trainingBudget',
      name: 'Training Budget',
      value: 500,
      min: 100,
      max: 1000,
      unit: 'M AED',
      impact: 'medium',
    },
    {
      id: 'visaFees',
      name: 'Work Visa Fees',
      value: 3000,
      min: 1000,
      max: 6000,
      unit: 'AED',
      impact: 'medium',
    },
    {
      id: 'taxIncentives',
      name: 'Business Tax Incentives',
      value: 15,
      min: 0,
      max: 30,
      unit: '%',
      impact: 'high',
    },
  ]);

  // Calculate projections based on policy levers
  const calculateProjections = () => {
    const emiratizationLever = policyLevers.find((l) => l.id === 'emiratization')!;
    const minWageLever = policyLevers.find((l) => l.id === 'minWage')!;
    const trainingLever = policyLevers.find((l) => l.id === 'trainingBudget')!;
    const visaLever = policyLevers.find((l) => l.id === 'visaFees')!;
    const taxLever = policyLevers.find((l) => l.id === 'taxIncentives')!;

    // Simplified projection calculations (in reality, these would use complex economic models)
    const gdpImpact =
      3.5 +
      (taxLever.value / 30) * 2 +
      (trainingLever.value / 1000) * 1.5 -
      (minWageLever.value / 8000) * 0.5;
    const employmentImpact =
      95 +
      (trainingLever.value / 1000) * 2 -
      (minWageLever.value / 8000) * 1 -
      (visaLever.value / 6000) * 0.5;
    const businessCostsImpact =
      1.5 +
      (minWageLever.value / 8000) * 2 +
      (emiratizationLever.value / 10) * 1 +
      (visaLever.value / 6000) * 0.5 -
      (taxLever.value / 30) * 1;
    const emiratizationImpact =
      28 + (emiratizationLever.value / 10) * 15 + (trainingLever.value / 1000) * 5;

    return {
      gdp: Math.max(0, Math.min(10, gdpImpact)),
      employment: Math.max(90, Math.min(100, employmentImpact)),
      businessCosts: Math.max(0, Math.min(5, businessCostsImpact)),
      emiratization: Math.max(20, Math.min(50, emiratizationImpact)),
    };
  };

  const projections = calculateProjections();

  // Predefined scenarios
  const predefinedScenarios: Scenario[] = [
    {
      id: 'conservative',
      name: 'Conservative Approach',
      description: 'Minimal policy changes, gradual improvements',
      levers: {
        emiratization: 3.5,
        minWage: 4500,
        trainingBudget: 300,
        visaFees: 2500,
        taxIncentives: 10,
      },
      projections: {
        gdp: 3.8,
        employment: 95.2,
        businessCosts: 1.2,
        emiratization: 30,
      },
    },
    {
      id: 'aggressive',
      name: 'Aggressive Push',
      description: 'Bold policy changes for rapid transformation',
      levers: {
        emiratization: 7.5,
        minWage: 6500,
        trainingBudget: 800,
        visaFees: 4500,
        taxIncentives: 25,
      },
      projections: {
        gdp: 5.2,
        employment: 96.8,
        businessCosts: 3.1,
        emiratization: 42,
      },
    },
    {
      id: 'balanced',
      name: 'Balanced Strategy',
      description: 'Moderate approach balancing multiple objectives',
      levers: {
        emiratization: 5.5,
        minWage: 5500,
        trainingBudget: 600,
        visaFees: 3500,
        taxIncentives: 18,
      },
      projections: {
        gdp: 4.5,
        employment: 96.0,
        businessCosts: 2.2,
        emiratization: 36,
      },
    },
  ];

  const updateLever = (id: string, value: number) => {
    setPolicyLevers(
      policyLevers.map((lever) =>
        lever.id === id ? { ...lever, value } : lever
      )
    );
  };

  const loadScenario = (scenario: Scenario) => {
    setPolicyLevers(
      policyLevers.map((lever) => ({
        ...lever,
        value: scenario.levers[lever.id] || lever.value,
      }))
    );
    setActiveScenario(scenario.id);
  };

  const resetToDefault = () => {
    setPolicyLevers([
      { id: 'emiratization', name: 'Emiratization Quota', value: 4.5, min: 0, max: 10, unit: '%', impact: 'high' },
      { id: 'minWage', name: 'Minimum Wage', value: 5000, min: 3000, max: 8000, unit: 'AED', impact: 'high' },
      { id: 'trainingBudget', name: 'Training Budget', value: 500, min: 100, max: 1000, unit: 'M AED', impact: 'medium' },
      { id: 'visaFees', name: 'Work Visa Fees', value: 3000, min: 1000, max: 6000, unit: 'AED', impact: 'medium' },
      { id: 'taxIncentives', name: 'Business Tax Incentives', value: 15, min: 0, max: 30, unit: '%', impact: 'high' },
    ]);
    setActiveScenario('current');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            🎯 Policy Simulation & Impact Forecasting
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={resetToDefault}>
              🔄 Reset
            </Button>
            <Button variant="primary" size="sm" onClick={() => setShowSaveModal(true)}>
              💾 Save Scenario
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Home &gt; Federal Dashboard &gt; Policy Simulation & Impact Forecasting
        </p>
      </div>

      {/* Predefined Scenarios */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          📋 Quick Scenarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {predefinedScenarios.map((scenario) => (
            <Card
              key={scenario.id}
              className={`p-4 cursor-pointer transition-all ${
                activeScenario === scenario.id
                  ? 'ring-2 ring-[#D4AF37] bg-yellow-50'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => loadScenario(scenario)}
            >
              <h3 className="font-bold text-gray-900 mb-1">{scenario.name}</h3>
              <p className="text-xs text-gray-600 mb-3">{scenario.description}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-600">GDP:</span>
                  <span className="font-semibold text-green-600 ml-1">
                    +{scenario.projections.gdp}%
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Employment:</span>
                  <span className="font-semibold text-blue-600 ml-1">
                    {scenario.projections.employment}%
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Costs:</span>
                  <span className="font-semibold text-red-600 ml-1">
                    +{scenario.projections.businessCosts}%
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Emiratization:</span>
                  <span className="font-semibold text-[#D4AF37] ml-1">
                    {scenario.projections.emiratization}%
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Policy Levers */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            🎚️ Policy Levers
          </h3>
          <div className="space-y-6">
            {policyLevers.map((lever) => (
              <div key={lever.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      {lever.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        lever.impact === 'high'
                          ? 'bg-red-100 text-red-700'
                          : lever.impact === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {lever.impact} impact
                    </span>
                  </div>
                  <span className="text-lg font-bold text-[#D4AF37]">
                    {lever.value} {lever.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={lever.min}
                  max={lever.max}
                  step={lever.id === 'minWage' || lever.id === 'visaFees' ? 100 : lever.id === 'trainingBudget' ? 50 : 0.5}
                  value={lever.value}
                  onChange={(e) => updateLever(lever.id, parseFloat(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                      ((lever.value - lever.min) / (lever.max - lever.min)) * 100
                    }%, #e5e7eb ${
                      ((lever.value - lever.min) / (lever.max - lever.min)) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>
                    {lever.min} {lever.unit}
                  </span>
                  <span>
                    {lever.max} {lever.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Impact Summary */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📊 Projected Impact (2028)
          </h3>
          <div className="space-y-4">
            {/* GDP Growth */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  GDP Growth
                </span>
                <span className="text-lg font-bold text-green-600">
                  +{projections.gdp.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all"
                  style={{ width: `${(projections.gdp / 10) * 100}%` }}
                />
              </div>
            </div>

            {/* Employment Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Employment Rate
                </span>
                <span className="text-lg font-bold text-blue-600">
                  {projections.employment.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all"
                  style={{ width: `${projections.employment}%` }}
                />
              </div>
            </div>

            {/* Business Costs */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Business Costs
                </span>
                <span className="text-lg font-bold text-red-600">
                  +{projections.businessCosts.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-red-500 h-3 rounded-full transition-all"
                  style={{ width: `${(projections.businessCosts / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Emiratization */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Emiratization Rate
                </span>
                <span className="text-lg font-bold text-[#D4AF37]">
                  {projections.emiratization.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#D4AF37] h-3 rounded-full transition-all"
                  style={{ width: `${(projections.emiratization / 50) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs font-semibold text-blue-900 mb-1">
              💡 Overall Assessment
            </p>
            <p className="text-xs text-blue-700">
              {projections.gdp > 4.5 && projections.employment > 95.5
                ? 'Strong positive impact across all metrics. Recommended for implementation.'
                : projections.gdp > 3.5
                ? 'Moderate positive impact. Consider adjusting levers for optimization.'
                : 'Limited impact. Significant policy changes may be needed.'}
            </p>
          </div>
        </Card>
      </div>

      {/* Detailed Projections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Economic Impact */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            💰 Economic Impact Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">GDP Growth</p>
                <p className="text-xs text-gray-600">Annual increase</p>
              </div>
              <p className="text-2xl font-bold text-green-600">
                +{projections.gdp.toFixed(1)}%
              </p>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">New Jobs Created</p>
                <p className="text-xs text-gray-600">Estimated by 2028</p>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round((projections.employment - 95) * 50000).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Tax Revenue</p>
                <p className="text-xs text-gray-600">Additional annual</p>
              </div>
              <p className="text-2xl font-bold text-purple-600">
                AED {(projections.gdp * 2.5).toFixed(1)}B
              </p>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Business Investment
                </p>
                <p className="text-xs text-gray-600">Expected increase</p>
              </div>
              <p className="text-2xl font-bold text-orange-600">
                +{(projections.gdp * 1.8).toFixed(1)}%
              </p>
            </div>
          </div>
        </Card>

        {/* Workforce Impact */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            👥 Workforce Impact Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  UAE Nationals Employed
                </p>
                <p className="text-xs text-gray-600">Additional workers</p>
              </div>
              <p className="text-2xl font-bold text-[#D4AF37]">
                +{Math.round(projections.emiratization * 1000).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Skills Training Completed
                </p>
                <p className="text-xs text-gray-600">Workers upskilled</p>
              </div>
              <p className="text-2xl font-bold text-green-600">
                {Math.round(
                  policyLevers.find((l) => l.id === 'trainingBudget')!.value * 8
                ).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Average Wage Increase
                </p>
                <p className="text-xs text-gray-600">For UAE nationals</p>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                +{(
                  ((policyLevers.find((l) => l.id === 'minWage')!.value - 3000) /
                    3000) *
                  100
                ).toFixed(0)}
                %
              </p>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Unemployment Rate
                </p>
                <p className="text-xs text-gray-600">Projected decrease</p>
              </div>
              <p className="text-2xl font-bold text-red-600">
                {(5 - projections.employment / 20).toFixed(1)}%
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Sensitivity Analysis */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          📊 Policy Sensitivity Analysis
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Which policies have the biggest impact on GDP growth?
        </p>
        <div className="space-y-3">
          {[
            { name: 'Business Tax Incentives', impact: 85, color: 'bg-red-500' },
            { name: 'Emiratization Quota', impact: 72, color: 'bg-orange-500' },
            { name: 'Training Budget', impact: 68, color: 'bg-yellow-500' },
            { name: 'Minimum Wage', impact: 45, color: 'bg-green-500' },
            { name: 'Work Visa Fees', impact: 32, color: 'bg-blue-500' },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {item.name}
                </span>
                <span className="text-sm font-semibold">{item.impact}% impact</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`${item.color} h-4 rounded-full`}
                  style={{ width: `${item.impact}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button variant="primary">📥 Export Simulation Report</Button>
        <Button variant="outline">📊 Compare Scenarios</Button>
        <Button variant="outline">🔔 Set Up Monitoring</Button>
      </div>

      {/* Save Scenario Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              💾 Save Scenario
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Scenario Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., My Custom Strategy"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Description
                </label>
                <textarea
                  placeholder="Brief description of this scenario..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => setShowSaveModal(false)}
                >
                  Save
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowSaveModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

