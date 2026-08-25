import React from 'react'

export const Logo: React.FC<{className?:string, compact?:boolean}> = ({className, compact}) => {
  return (
    <div className={`flex items-center gap-3 ${className || ''}`}>
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <radialGradient id="g" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#16A34A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="64" height="64" rx="12" fill="#0F1311" />
        <circle cx="18" cy="18" r="18" fill="url(#g)" opacity="0.85" />
        <path d="M20 44V22c0-2.761 2.239-5 5-5h8" stroke="#F7F9F7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 34h6a6 6 0 1 0 0-12h-6v24" stroke="#F7F9F7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && <div className="leading-tight">
        <div className="text-lg font-semibold" style={{letterSpacing: '-0.02em'}}>RizzScouting</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">Lead scouting & outreach</div>
      </div>}
    </div>
  )
}

export default Logo
