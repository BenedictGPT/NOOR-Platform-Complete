'use client';

import { useState } from 'react';
import { Card } from '@/components/federal/Card';
import { Button } from '@/components/federal/Button';

export default function NationalWorkforcePage() {
  const [timeRange, setTimeRange] = useState('today');
  const [emirate, setEmirate] = useState('all');
  const [liveMode, setLiveMode] = useState(true);

  // Mock data for key metrics
  const metrics = {
    workforce: {
      value: '5,234,891',
      label: 'Total Workers',
      change: '+2.3%',
      trend: 'up',
      sparkline: [45, 52, 48, 61, 70, 85],
    },
    unemployment: {
      value: '2.8%',
      label: 'Unemployment',
      change: '-0.2%',
      trend: 'down',
      sparkline: [85, 70, 65, 55, 48, 42],
    },
    participation: {
      value: '78.4%',
      label: 'Labor Force',
      change: '+1.1%',
      trend: 'up',
      sparkline: [48, 55, 62, 70, 78, 85],
    },
    avgWage: {
      value: '12,450',
      label: 'AED/month',
      change: '+3.8%',
      trend: 'up',
      sparkline: [42, 55, 70, 85],
    },
    openings: {
      value: '45,678',
      label: 'Active Jobs',
      change: '+892',
      trend: 'up',
    },
    filledPerDay: {
      value: '1,234',
      label: 'Positions',
      change: '+156',
      trend: 'up',
    },
    avgTime: {
      value: '28 days',
      label: 'To Fill Job',
      change: '-3 days',
      trend: 'down',
    },
    turnover: {
      value: '8.2%',
      label: 'Annual',
      change: '-1.1%',
      trend: 'down',
    },
  };

  // Mock data for demographics
  const demographics = {
    gender: {
      male: { count: 3559726, percentage: 68 },
      female: { count: 1675165, percentage: 32 },
    },
    nationality: {
      uae: { count: 1465769, percentage: 28 },
      expats: { count: 3769122, percentage: 72 },
      regions: {
        gcc: { count: 892000, percentage: 17 },
        asian: { count: 2341000, percentage: 45 },
        western: { count: 356000, percentage: 7 },
        other: { count: 180000, percentage: 3 },
      },
    },
    age: [
      { range: '18-25', count: 523489, percentage: 10 },
      { range: '26-35', count: 1570467, percentage: 30 },
      { range: '36-45', count: 1884356, percentage: 36 },
      { range: '46-55', count: 1047978, percentage: 20 },
      { range: '56-65', count: 209396, percentage: 4 },
    ],
    education: [
      { level: 'PhD/Doctorate', count: 167000, percentage: 3.2 },
      { level: "Master's Degree", count: 670000, percentage: 12.8 },
      { level: "Bachelor's Degree", count: 1785000, percentage: 34.1 },
      { level: 'Diploma/Associate', count: 958000, percentage: 18.3 },
      { level: 'High School', count: 1288000, percentage: 24.6 },
      { level: 'Below High School', count: 366000, percentage: 7.0 },
    ],
  };

  // Mock data for trend analysis
  const trendData = [
    { month: 'Jan', total: 4500000, uae: 1260000, expats: 3240000 },
    { month: 'Feb', total: 4650000, uae: 1302000, expats: 3348000 },
    { month: 'Mar', total: 4750000, uae: 1330000, expats: 3420000 },
    { month: 'Apr', total: 4850000, uae: 1358000, expats: 3492000 },
    { month: 'May', total: 4920000, uae: 1377600, expats: 3542400 },
    { month: 'Jun', total: 5000000, uae: 1400000, expats: 3600000 },
    { month: 'Jul', total: 5050000, uae: 1414000, expats: 3636000 },
    { month: 'Aug', total: 5100000, uae: 1428000, expats: 3672000 },
    { month: 'Sep', total: 5150000, uae: 1442000, expats: 3708000 },
    { month: 'Oct', total: 5200000, uae: 1456000, expats: 3744000 },
    { month: 'Nov', total: 5234891, uae: 1465769, expats: 3769122 },
  ];

  // Mock data for top hiring sectors
  const topSectors = [
    { name: 'Technology', hires: 2341 },
    { name: 'Healthcare', hires: 1876 },
    { name: 'Construction', hires: 1432 },
    { name: 'Retail', hires: 987 },
    { name: 'Finance', hires: 765 },
  ];

  // Mock activity feed
  const activityFeed = [
    { text: 'Tech sector hiring +15%', time: 'Just now', type: 'info' },
    { text: 'New job postings: 1,234', time: '2 minutes ago', type: 'info' },
    { text: 'Healthcare jobs filled', time: '5 minutes ago', type: 'success' },
    { text: 'Unemployment ↓ 0.2%', time: '15 minutes ago', type: 'success' },
    { text: 'Tech talent shortage', time: '1 hour ago', type: 'warning' },
    { text: 'Retail turnover spike', time: '2 hours ago', type: 'warning' },
  ];

  const renderSparkline = (data: number[]) => {
    const max = Math.max(...data);
    const normalized = data.map((v) => (v / max) * 100);
    return (
      <div className="flex items-end gap-0.5 h-8">
        {normalized.map((height, i) => (
          <div
            key={i}
            className="w-2 bg-[#D4AF37] rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            🏛️ National Workforce Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">2025-11-04</span>
            <Button variant="outline" size="sm">
              🔔 (3)
            </Button>
            <Button variant="outline" size="sm">
              ⚙️
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Home &gt; Federal Dashboard &gt; National Workforce Dashboard
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-6 p-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">📅</span>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">📍</span>
            <select
              value={emirate}
              onChange={(e) => setEmirate(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">All Emirates</option>
              <option value="abudhabi">Abu Dhabi</option>
              <option value="dubai">Dubai</option>
              <option value="sharjah">Sharjah</option>
              <option value="ajman">Ajman</option>
              <option value="uaq">Umm Al Quwain</option>
              <option value="rak">Ras Al Khaimah</option>
              <option value="fujairah">Fujairah</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">👥</span>
            <select className="px-3 py-1.5 border border-gray-300 rounded-md text-sm">
              <option>All Demographics</option>
              <option>UAE Nationals</option>
              <option>Expats</option>
            </select>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm font-medium">🔄 Live Mode</span>
            <button
              onClick={() => setLiveMode(!liveMode)}
              className={`w-10 h-6 rounded-full transition-colors ${
                liveMode ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  liveMode ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          📊 Key Metrics (Real-time)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Workforce */}
          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">💼</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  metrics.workforce.trend === 'up'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {metrics.workforce.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.workforce.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.workforce.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs last month</div>
            {renderSparkline(metrics.workforce.sparkline)}
            <div className="text-xs text-gray-400 mt-1">Last 6 months</div>
          </Card>

          {/* Unemployment */}
          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">📉</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.unemployment.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.unemployment.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.unemployment.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs last month</div>
            {renderSparkline(metrics.unemployment.sparkline)}
            <div className="text-xs text-gray-400 mt-1">Last 6 months</div>
          </Card>

          {/* Participation */}
          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">📈</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.participation.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.participation.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.participation.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs last month</div>
            {renderSparkline(metrics.participation.sparkline)}
            <div className="text-xs text-gray-400 mt-1">Last 6 months</div>
          </Card>

          {/* Average Wage */}
          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">💰</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.avgWage.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.avgWage.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.avgWage.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs 2024</div>
            {renderSparkline(metrics.avgWage.sparkline)}
            <div className="text-xs text-gray-400 mt-1">YTD</div>
          </Card>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">📋</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.openings.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.openings.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.openings.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">this week</div>
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              View All →
            </Button>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">🎯</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.filledPerDay.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.filledPerDay.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.filledPerDay.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs yesterday</div>
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              📊 Details
            </Button>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.avgTime.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.avgTime.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.avgTime.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs last qtr</div>
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              🔍 Analyze
            </Button>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">🔄</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                {metrics.turnover.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metrics.turnover.value}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {metrics.turnover.label}
            </div>
            <div className="text-xs text-gray-500 mb-2">vs 2024</div>
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              Details
            </Button>
          </Card>
        </div>
      </div>

      {/* Workforce Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              📊 Workforce Composition
            </h3>
            <select className="px-3 py-1.5 border border-gray-300 rounded-md text-sm">
              <option>View: Chart</option>
              <option>View: Table</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gender Distribution */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Gender Distribution
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Male</span>
                    <span className="text-sm font-semibold">
                      {demographics.gender.male.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{
                        width: `${demographics.gender.male.percentage}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {demographics.gender.male.count.toLocaleString()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Female</span>
                    <span className="text-sm font-semibold">
                      {demographics.gender.female.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-pink-600 h-3 rounded-full"
                      style={{
                        width: `${demographics.gender.female.percentage}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {demographics.gender.female.count.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Nationality Breakdown */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Nationality Breakdown
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">UAE National</span>
                    <span className="text-sm font-semibold">
                      {demographics.nationality.uae.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#D4AF37] h-3 rounded-full"
                      style={{
                        width: `${demographics.nationality.uae.percentage}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {demographics.nationality.uae.count.toLocaleString()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Expats</span>
                    <span className="text-sm font-semibold">
                      {demographics.nationality.expats.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#1E3A5F] h-3 rounded-full"
                      style={{
                        width: `${demographics.nationality.expats.percentage}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {demographics.nationality.expats.count.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">By Region:</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>GCC Countries:</span>
                    <span className="font-semibold">
                      {(
                        demographics.nationality.regions.gcc.count / 1000
                      ).toFixed(0)}
                      K ({demographics.nationality.regions.gcc.percentage}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Asian:</span>
                    <span className="font-semibold">
                      {(
                        demographics.nationality.regions.asian.count / 1000
                      ).toFixed(0)}
                      K ({demographics.nationality.regions.asian.percentage}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Western:</span>
                    <span className="font-semibold">
                      {(
                        demographics.nationality.regions.western.count / 1000
                      ).toFixed(0)}
                      K ({demographics.nationality.regions.western.percentage}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other:</span>
                    <span className="font-semibold">
                      {(
                        demographics.nationality.regions.other.count / 1000
                      ).toFixed(0)}
                      K ({demographics.nationality.regions.other.percentage}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <Button variant="outline" size="sm">
              📥 Export Data
            </Button>
            <Button variant="outline" size="sm">
              🔍 Deep Dive
            </Button>
          </div>
        </Card>

        {/* Live Activity Feed */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📱 Live Activity Feed
          </h3>
          <div className="space-y-3">
            {activityFeed.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 pb-3 border-b border-gray-100 last:border-0"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 ${
                    item.type === 'success'
                      ? 'bg-green-500'
                      : item.type === 'warning'
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{item.text}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              🔔 Critical Alerts: (2)
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                <span>⚠️</span>
                <span>Tech talent shortage</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                <span>⚠️</span>
                <span>Retail turnover spike</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4">
            View All Activity →
          </Button>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Education Levels */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            🎓 Education Levels
          </h3>
          <div className="space-y-3">
            {demographics.education.map((edu, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{edu.level}</span>
                  <span className="text-sm font-semibold">
                    {edu.percentage}% ({(edu.count / 1000).toFixed(0)}K)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#D4AF37] h-2 rounded-full"
                    style={{ width: `${edu.percentage * 2.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4">
            📊 View Detailed Breakdown →
          </Button>
        </Card>

        {/* Top Hiring Sectors */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            💼 Top Hiring Sectors (This Week)
          </h3>
          <div className="space-y-3">
            {topSectors.map((sector, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-400">
                    {index + 1}.
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {sector.name}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#D4AF37]">
                  +{sector.hires.toLocaleString()} hires
                </span>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4">
            See All Sectors →
          </Button>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4 justify-center">
        <Button variant="primary">📥 Export Dashboard</Button>
        <Button variant="outline">📊 Custom Report</Button>
        <Button variant="outline">⭐ Save View</Button>
        <Button variant="outline">🔗 Share</Button>
      </div>
    </div>
  );
}

