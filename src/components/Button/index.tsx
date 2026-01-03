import styles from './styles.module.css'

type Props = React.ComponentProps<'button'> & {
    title:string
    color?: 'default' | 'black'
}

export function Button({title, color='default', ...rest}:Props) {
    return (
        <button
        type="button"
      className={`${styles.button} ${
        color === 'default' ? styles.default : styles.black
      }`}
        {...rest}>
            {title}
        
        </button>         
    )
} 
