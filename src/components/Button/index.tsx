import styles from './styles.module.css'

import { useNavigate } from 'react-router'


type Props = React.ComponentProps<'button'> & {
    title:React.ReactNode
    color?: 'default' | 'black' | 'dark' 
    to?: string
    delay?: number

    
}

export function Button({title, color='default',to, delay=300, ...rest}:Props ) {
    const navigate = useNavigate()

    const colorVariants = {
      default: styles.default,
      black: styles.black,
      dark:styles.dark
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      
      if (rest.onClick) {
          rest.onClick(e)
      }
      if ( !to) return;

      setTimeout(() => {
        navigate(to);
      }, delay);
    }


  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${colorVariants[color]}`}
      {...rest}
    >
      {title}
    </button>
  )
}


