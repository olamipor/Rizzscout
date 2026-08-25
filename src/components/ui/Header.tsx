import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Search, Bell } from 'lucide-react'
import Logo from '../logo/Logo'

const Header: React.FC<{theme:'light'|'dark', setTheme:(t:'light'|'dark')=>void}> = ({theme, setTheme}) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-zinc-500">Here's what's happening with your outreach today.</p>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Search" className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"><Search size={18} /></button>
        <button aria-label="Notifications" className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"><Bell size={18} /></button>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          <div className="text-sm">
            <div className="font-medium">Rizz Team</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
