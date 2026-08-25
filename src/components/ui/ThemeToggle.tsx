import React from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle: React.FC<{theme:'light'|'dark', setTheme:(t:'light'|'dark')=>void}> = ({theme, setTheme}) => {
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
