import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Scouting from './pages/Scouting'
import Leads from './pages/Leads'
import Campaigns from './pages/Campaigns'
import Templates from './pages/Templates'
import Analytics from './pages/Analytics'
import Activity from './pages/Activity'
import Settings from './pages/Settings'
import Header from './components/ui/Header'
import Sidebar from './components/ui/Sidebar'

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    try{
      const saved = localStorage.getItem('rizz-theme') as 'light'|'dark'|null
      if(saved) return saved
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? 'dark' : 'light'
    }catch{
      return 'light'
    }
  })

  useEffect(()=>{
    const root = document.documentElement
    if(theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('rizz-theme', theme)
  },[theme])

  return (
    <div className="min-h-screen flex theme-transition">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header theme={theme} setTheme={setTheme} />
        <main className="p-6 bg-[var(--light-bg)] dark:bg-[var(--dark-bg)] flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/scouting" element={<Scouting/>} />
            <Route path="/leads" element={<Leads/>} />
            <Route path="/campaigns" element={<Campaigns/>} />
            <Route path="/campaigns/new" element={<div>New Campaign (placeholder)</div>} />
            <Route path="/templates" element={<Templates/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/activity" element={<Activity/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
