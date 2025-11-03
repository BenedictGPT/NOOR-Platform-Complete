'use client';

import { useState } from 'react';
import { Card } from '@/components/federal/Card';
import { Button } from '@/components/federal/Button';

interface ExportTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  estimatedTime: string;
}

interface ExportHistory {
  id: string;
  name: string;
  format: string;
  date: string;
  size: string;
  status: 'completed' | 'processing' | 'failed';
}

export default function ExportCenterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Export templates
  const templates: ExportTemplate[] = [
    {
      id: 'emiratization',
      name: 'Emiratization Report',
      description: 'Comprehensive Emiratization progress across all sectors',
      icon: '🇦🇪',
      category: 'Compliance',
      estimatedTime: '2-3 min',
    },
    {
      id: 'skills-gap',
      name: 'Skills Gap Analysis',
      description: 'Supply-demand analysis with critical shortages',
      icon: '🎯',
      category: 'Workforce',
      estimatedTime: '3-4 min',
    },
    {
      id: 'regional',
      name: 'Regional Talent Audit',
      description: 'Workforce distribution across all emirates',
      icon: '🗺️',
      category: 'Geographic',
      estimatedTime: '2-3 min',
    },
    {
      id: 'sector',
      name: 'Sector Health Check',
      description: 'Detailed analysis of all major sectors',
      icon: '🏢',
      category: 'Sector',
      estimatedTime: '4-5 min',
    },
    {
      id: 'workforce',
      name: 'National Workforce Summary',
      description: 'Complete workforce statistics and trends',
      icon: '👥',
      category: 'Workforce',
      estimatedTime: '2-3 min',
    },
    {
      id: 'policy',
      name: 'Policy Impact Report',
      description: 'Simulation results and forecasting data',
      icon: '📊',
      category: 'Policy',
      estimatedTime: '3-4 min',
    },
  ];

  // Data sources
  const dataSources = [
    { id: 'workforce', name: 'Workforce Statistics', icon: '👥' },
    { id: 'sectors', name: 'Sector Analysis', icon: '🏢' },
    { id: 'regional', name: 'Regional Data', icon: '🗺️' },
    { id: 'skills', name: 'Skills & Education', icon: '🎓' },
    { id: 'emiratization', name: 'Emiratization Progress', icon: '🇦🇪' },
    { id: 'jobs', name: 'Job Market Data', icon: '💼' },
    { id: 'salaries', name: 'Salary Information', icon: '💰' },
    { id: 'trends', name: 'Historical Trends', icon: '📈' },
  ];

  // Export formats
  const formats = [
    {
      id: 'pdf',
      name: 'PDF Document',
      icon: '📄',
      description: 'Professional report format',
    },
    {
      id: 'excel',
      name: 'Excel Spreadsheet',
      icon: '📊',
      description: 'Data tables and charts',
    },
    {
      id: 'powerpoint',
      name: 'PowerPoint',
      icon: '📑',
      description: 'Presentation slides',
    },
    {
      id: 'dashboard',
      name: 'Dashboard Link',
      icon: '🔗',
      description: 'Shareable live dashboard',
    },
    {
      id: 'csv',
      name: 'CSV Data',
      icon: '📋',
      description: 'Raw data export',
    },
  ];

  // Export history
  const exportHistory: ExportHistory[] = [
    {
      id: '1',
      name: 'Q3_Emiratization_Report.pdf',
      format: 'PDF',
      date: '2 days ago',
      size: '2.4 MB',
      status: 'completed',
    },
    {
      id: '2',
      name: 'Skills_Gap_Analysis.xlsx',
      format: 'Excel',
      date: '1 week ago',
      size: '1.8 MB',
      status: 'completed',
    },
    {
      id: '3',
      name: 'Regional_Talent_Map.pptx',
      format: 'PowerPoint',
      date: '2 weeks ago',
      size: '5.2 MB',
      status: 'completed',
    },
    {
      id: '4',
      name: 'Workforce_Summary_Oct.pdf',
      format: 'PDF',
      date: '3 weeks ago',
      size: '1.9 MB',
      status: 'completed',
    },
  ];

  const toggleDataSource = (id: string) => {
    if (selectedDataSources.includes(id)) {
      setSelectedDataSources(selectedDataSources.filter((s) => s !== id));
    } else {
      setSelectedDataSources([...selectedDataSources, id]);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleExport = () => {
    alert('Export started! You will receive a notification when ready.');
    setCurrentStep(1);
    setSelectedTemplate(null);
    setSelectedFormat(null);
    setSelectedDataSources([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            📥 Data Export Center
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowScheduleModal(true)}
            >
              📅 Schedule Report
            </Button>
            <Button variant="outline" size="sm">
              📜 View History
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Home &gt; Federal Dashboard &gt; Data Export Center
        </p>
      </div>

      {/* Export Wizard Progress */}
      <Card className="mb-6 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">
            Step {currentStep} of 5: {
              currentStep === 1 ? 'Choose Template' :
              currentStep === 2 ? 'Select Data Sources' :
              currentStep === 3 ? 'Choose Format' :
              currentStep === 4 ? 'Configure Options' :
              'Review & Export'
            }
          </h3>
          <div className="flex items-center gap-2">
            {currentStep > 1 && (
              <Button variant="outline" size="sm" onClick={handlePrevious}>
                ← Previous
              </Button>
            )}
            {currentStep < 5 && (
              <Button
                variant="primary"
                size="sm"
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !selectedTemplate) ||
                  (currentStep === 2 && selectedDataSources.length === 0) ||
                  (currentStep === 3 && !selectedFormat)
                }
              >
                Next →
              </Button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex-1">
              <div
                className={`h-2 rounded-full ${
                  step <= currentStep ? 'bg-[#D4AF37]' : 'bg-gray-200'
                }`}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Step 1: Template Selection */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            📋 Choose a Template
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? 'ring-2 ring-[#D4AF37] bg-yellow-50'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{template.icon}</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {template.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {template.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>⏱️ {template.estimatedTime}</span>
                  {selectedTemplate === template.id && (
                    <span className="text-[#D4AF37] font-semibold">✓ Selected</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Data Source Selection */}
      {currentStep === 2 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            📊 Select Data Sources
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Choose which data to include in your report (select multiple)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataSources.map((source) => (
              <Card
                key={source.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedDataSources.includes(source.id)
                    ? 'ring-2 ring-[#D4AF37] bg-yellow-50'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => toggleDataSource(source.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{source.icon}</span>
                  <input
                    type="checkbox"
                    checked={selectedDataSources.includes(source.id)}
                    onChange={() => toggleDataSource(source.id)}
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {source.name}
                </h3>
              </Card>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {selectedDataSources.length} data source(s) selected
          </p>
        </div>
      )}

      {/* Step 3: Format Selection */}
      {currentStep === 3 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            📄 Choose Export Format
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((format) => (
              <Card
                key={format.id}
                className={`p-6 cursor-pointer transition-all ${
                  selectedFormat === format.id
                    ? 'ring-2 ring-[#D4AF37] bg-yellow-50'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedFormat(format.id)}
              >
                <div className="text-center">
                  <span className="text-5xl mb-3 block">{format.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{format.name}</h3>
                  <p className="text-sm text-gray-600">{format.description}</p>
                  {selectedFormat === format.id && (
                    <span className="inline-block mt-3 text-xs px-3 py-1 bg-[#D4AF37] text-white rounded-full">
                      ✓ Selected
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Configure Options */}
      {currentStep === 4 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ⚙️ Configure Export Options
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Date Range</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    defaultValue="2024-01-01"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    defaultValue="2024-11-04"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Emirate
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>All Emirates</option>
                    <option>Abu Dhabi</option>
                    <option>Dubai</option>
                    <option>Sharjah</option>
                    <option>Ajman</option>
                    <option>Umm Al Quwain</option>
                    <option>Ras Al Khaimah</option>
                    <option>Fujairah</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Sector
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>All Sectors</option>
                    <option>Banking & Finance</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Construction</option>
                    <option>Retail</option>
                    <option>Oil & Gas</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Visualization Options
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Include charts and graphs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Include trend analysis</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Include executive summary</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">Include raw data tables</span>
                </label>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Branding</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Include government logo</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Add watermark</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">Mark as confidential</span>
                </label>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Step 5: Review & Export */}
      {currentStep === 5 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ✅ Review & Export
          </h2>
          <Card className="p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Export Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Template</p>
                <p className="font-semibold text-gray-900">
                  {templates.find((t) => t.id === selectedTemplate)?.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Format</p>
                <p className="font-semibold text-gray-900">
                  {formats.find((f) => f.id === selectedFormat)?.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Data Sources</p>
                <p className="font-semibold text-gray-900">
                  {selectedDataSources.length} selected
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Time</p>
                <p className="font-semibold text-gray-900">
                  {templates.find((t) => t.id === selectedTemplate)?.estimatedTime}
                </p>
              </div>
            </div>
          </Card>

          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={handleExport}>
              🚀 Start Export
            </Button>
            <Button variant="outline" size="lg" onClick={() => setCurrentStep(1)}>
              🔄 Start Over
            </Button>
          </div>
        </div>
      )}

      {/* Export History */}
      <Card className="mt-6 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          📜 Recent Exports
        </h3>
        <div className="space-y-3">
          {exportHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {item.format === 'PDF'
                    ? '📄'
                    : item.format === 'Excel'
                    ? '📊'
                    : '📑'}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-600">
                    {item.format} • {item.size} • {item.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                  ✓ {item.status}
                </span>
                <Button variant="ghost" size="sm">
                  📥 Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Schedule Report Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              📅 Schedule Recurring Report
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Report Template
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  {templates.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Frequency
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email Recipients
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => {
                    alert('Report scheduled successfully!');
                    setShowScheduleModal(false);
                  }}
                >
                  Schedule
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowScheduleModal(false)}
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

