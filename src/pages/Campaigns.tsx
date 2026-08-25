import React from 'react'

const Campaigns: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Campaigns</h2>
          <p className="text-sm text-zinc-500">Create and manage outreach campaigns.</p>
        </div>
        <button className="btn-primary px-4 py-2 rounded-md">Create Campaign</button>
      </div>

      <div className="rounded-lg bg-white dark:bg-[var(--dark-card)] border border-zinc-100 dark:border-zinc-800 p-4">
        <div className="text-center py-16 text-zinc-500">Campaigns table placeholder</div>
      </div>
    </div>
  )
}

export default Campaigns
