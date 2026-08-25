import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/logo/Logo'

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-xl shadow bg-white dark:bg-[var(--dark-card)]">
        <div className="mb-6"><Logo /></div>
        <h2 className="text-2xl font-semibold mb-2">Sign in to RizzScouting</h2>
        <p className="text-sm text-zinc-500 mb-4">Welcome back — enter your details to continue.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full px-3 py-2 border rounded-md bg-white dark:bg-[var(--dark-bg)]" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md bg-white dark:bg-[var(--dark-bg)]" placeholder="••••••" />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm"><input type="checkbox" className="mr-2"/> Remember me</label>
            <Link to="/forgot" className="text-sm text-[var(--rizz-green)]">Forgot password?</Link>
          </div>
          <div>
            <button className="w-full btn-primary px-4 py-2 rounded-md">Sign in</button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">Don’t have an account? <Link to="/signup" className="text-[var(--rizz-green)]">Create account</Link></div>
      </div>
    </div>
  )
}

export default Login
