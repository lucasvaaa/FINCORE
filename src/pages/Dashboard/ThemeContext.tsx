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
  console.log('THEME ATUAwwwwL:', isDark ? 'dark' : 'light')

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
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error ('useDashboardTheme deve ser usado com DashboardThemeProvider')
  }
  
  return context 
}
