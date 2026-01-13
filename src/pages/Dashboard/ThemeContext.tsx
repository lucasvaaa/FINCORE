import { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { light, dark } from './theme'


type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function DashboardThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(true)

  function toggleTheme() {
    setIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? dark : light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useDashboardTheme() {
  return useContext(ThemeContext)
}
