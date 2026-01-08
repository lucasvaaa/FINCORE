import styles from './styles.module.css'

import { useNavigate } from 'react-router'


type Props = React.ComponentProps<'button'> & {
    title:React.ReactNode
    color?: 'default' | 'black' | 'dark' 
    to?: string
    delay?: number

    
}

export function Button({title, color='default',to, delay, ...rest}:Props, ) {
    const navigate = useNavigate()

    const colorVariants = {
      default: styles.default,
      black: styles.black,
      dark:styles.dark
    }


    



    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      

      if (e.defaultPrevented || !to) return;

      setTimeout(() => {
        navigate(to);
      }, 300);
    }


    return (
        <button
        type="button"
        onClick={handleClick}
        className={`${styles.button} ${colorVariants[color??'default']}`}
        {...rest}>
            {title}
        
        </button>         
    )
} 



