import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/logo/Logo'

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-xl shadow bg-white dark:bg-[var(--dark-card)]">
        <div className="mb-6"><Logo /></div>
        <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
        <p className="text-sm text-zinc-500 mb-4">Start a free trial and scout your first leads.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input className="w-full px-3 py-2 border rounded-md bg-white dark:bg-[var(--dark-bg)]" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Work email</label>
            <input className="w-full px-3 py-2 border rounded-md bg-white dark:bg-[var(--dark-bg)]" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md bg-white dark:bg-[var(--dark-bg)]" placeholder="Choose a strong password" />
          </div>
          <div>
            <button className="w-full btn-primary px-4 py-2 rounded-md">Create account</button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">Already have an account? <Link to="/login" className="text-[var(--rizz-green)]">Sign in</Link></div>
      </div>
    </div>
  )
}

export default Signup
