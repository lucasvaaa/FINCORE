import './styles.module.css'
import { Button } from '@/components/Button'
import theme from '@/assets/theme.svg'

export function ThemeButton () {
    return (
        <div>
            <Button
            title={
                <img src={theme} alt="icon Theme" />}
            color='dark'

            />
            
        </div>
    )
}