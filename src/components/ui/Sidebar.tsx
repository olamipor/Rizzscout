import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../logo/Logo'
import { Home, Search, Users, Mail, FileText, BarChart2, Activity, Settings } from 'lucide-react'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/scouting', label: 'Scouting', icon: Search },
  { to: '/leads', label: 'Leads', icon: Users },
  { to: '/campaigns', label: 'Campaigns', icon: Mail },
  { to: '/templates', label: 'Templates', icon: FileText },
  { to: '/analytics', label: 'Analytics', icon: BarChart2 },
  { to: '/activity', label: 'Activity', icon: Activity },
  { to: '/settings', label: 'Settings', icon: Settings }
]

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[var(--light-card)] dark:bg-[var(--dark-card)] border-r border-zinc-100 dark:border-zinc-800 min-h-screen px-4 py-6">
      <div className="mb-8">
        <Logo compact={true} />
      </div>
      <nav className="flex-1">
        <ul className="space-y-1">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <li key={it.to}>
                <NavLink to={it.to} className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? 'bg-[var(--rizz-green-2)]/10 text-[var(--rizz-green)] font-semibold' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}>
                  <Icon size={18} />
                  <span>{it.label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800">
          <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <div className="text-left flex-1">
            <div className="text-sm font-medium">Rizz Team</div>
            <div className="text-xs text-zinc-500">team@rizzscouting.com</div>
          </div>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
