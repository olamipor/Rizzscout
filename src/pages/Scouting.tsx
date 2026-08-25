import React from 'react'

const Scouting: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Lead Scouting</h2>
          <p className="text-sm text-zinc-500">Discover and organize prospects that match your ideal customer profile.</p>
        </div>
        <div className="flex items-center gap-3">
          <input placeholder="Search companies, websites, industries or keywords..." className="px-3 py-2 border rounded-md w-80 bg-white dark:bg-[var(--dark-bg)]" />
          <button className="btn-primary px-4 py-2 rounded-md">Find Leads</button>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-white dark:bg-[var(--dark-card)] border border-zinc-100 dark:border-zinc-800">
        <div className="text-sm text-zinc-500 mb-4">Filters: Industry • Location • Company Size • Website • Lead Status • Contact Availability</div>
        <div className="text-center py-12 text-zinc-500">Results table placeholder — lead results will appear here.</div>
      </div>
    </div>
  )
}

export default Scouting
