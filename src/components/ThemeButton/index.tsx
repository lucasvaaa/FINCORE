import { Button } from '@/components/Button'
import { useDashboardTheme } from '@/pages/Dashboard/ThemeContext'

import themeDark from '@/assets/theme.svg'
import themeLight from '@/assets/themeL.svg'

export function ThemeButton() {
  const { isDark, toggleTheme } = useDashboardTheme()

  const icon = isDark ? themeLight : themeDark

  return (
    <Button
      onClick={toggleTheme}
      title={<img src={icon} alt="Alterar tema" />}
      color="dark"
    />
  )
}



