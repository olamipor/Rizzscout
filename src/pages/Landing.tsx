import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/logo/Logo'

const Landing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <header className="flex items-center justify-between mb-12">
        <Logo />
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm">Sign in</Link>
          <Link to="/signup" className="btn-primary px-4 py-2 rounded-md text-sm">Start Scouting</Link>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Scout smarter. Reach the right people.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Discover qualified prospects, organize your leads, and run personalized outreach from one powerful workspace.</p>
          <div className="flex gap-3">
            <Link to="/signup" className="btn-primary px-4 py-2 rounded-md">Start Scouting</Link>
            <Link to="/dashboard" className="px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-800">View demo</Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[var(--dark-card)] border border-zinc-100 dark:border-zinc-800 p-6">
          <div className="h-64 bg-gradient-to-br from-green-50 to-white dark:from-[#071009] dark:to-[var(--dark-card)] rounded-md flex items-center justify-center text-white">Dashboard preview placeholder</div>
        </div>
      </section>

    </div>
  )
}

export default Landing
