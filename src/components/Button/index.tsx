import styles from './styles.module.css'
import { useNavigate } from 'react-router'


type Props = React.ComponentProps<'button'> & {
    title:string
    color?: 'default' | 'black'
    to?: string
    delay?: number

    
}

export function Button({title, color='default',to, delay, ...rest}:Props, ) {
    const navigate = useNavigate()

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
        className={`${styles.button} ${
        color === 'default' ? styles.default : styles.black
      }`}
        {...rest}>
            {title}
        
        </button>         
    )
} 
