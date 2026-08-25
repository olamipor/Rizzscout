import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { day: 'Mon', Sent: 400, Opened: 240, Replied: 24, Converted: 8 },
  { day: 'Tue', Sent: 420, Opened: 260, Replied: 30, Converted: 9 },
  { day: 'Wed', Sent: 500, Opened: 300, Replied: 40, Converted: 12 },
  { day: 'Thu', Sent: 480, Opened: 320, Replied: 50, Converted: 15 },
  { day: 'Fri', Sent: 520, Opened: 330, Replied: 55, Converted: 18 },
  { day: 'Sat', Sent: 300, Opened: 200, Replied: 20, Converted: 5 },
  { day: 'Sun', Sent: 200, Opened: 120, Replied: 10, Converted: 3 }
]

const StatCard: React.FC<{label:string, value:string, change?:string}> = ({label, value, change}) => (
  <div className="p-4 rounded-lg bg-white dark:bg-[var(--dark-card)] border border-zinc-100 dark:border-zinc-800">
    <div className="text-xs text-zinc-500 mb-1">{label}</div>
    <div className="flex items-center justify-between">
      <div className="text-2xl font-semibold">{value}</div>
      {change && <div className="text-sm text-[var(--rizz-green)]">{change}</div>}
    </div>
  </div>
)

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Good morning, Rizz</h2>
          <p className="text-sm text-zinc-500">Here's what's happening with your outreach today.</p>
        </div>
        <div>
          <button className="btn-primary px-4 py-2 rounded-md">New Campaign</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Leads" value="1,284" change="+4.2%" />
        <StatCard label="Emails Sent" value="4,821" change="+1.8%" />
        <StatCard label="Reply Rate" value="18.6%" change="+0.5%" />
        <StatCard label="Positive Replies" value="327" change="+2.1%" />
      </div>

      <div className="p-4 rounded-lg bg-white dark:bg-[var(--dark-card)] border border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Outreach Performance</h3>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <button className="px-2 py-1 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800">7 Days</button>
            <button className="px-2 py-1 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800">30 Days</button>
            <button className="px-2 py-1 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800">90 Days</button>
          </div>
        </div>
        <div style={{width:'100%', height:240}}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Sent" stroke="#22C55E" fill="url(#g1)" />
              <Area type="monotone" dataKey="Opened" stroke="#60a5fa" fillOpacity={0.06} />
              <Area type="monotone" dataKey="Replied" stroke="#f97316" fillOpacity={0.04} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
