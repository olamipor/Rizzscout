import React from 'react'

const Activity: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Activity</h2>
      <p className="text-sm text-zinc-500 mb-4">Recent chronological activity feed.</p>

      <div className="rounded-lg bg-white dark:bg-[var(--dark-card)] border border-zinc-100 dark:border-zinc-800 p-4">
        <div className="text-center py-16 text-zinc-500">Activity feed placeholder</div>
      </div>
    </div>
  )
}

export default Activity
