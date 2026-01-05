import styles from './styles.module.css'

type Props = React.ComponentProps<'input'> & {

    placeHol?:string
    tipo?: string | 'text'

}

export function InputAuth ({ placeHol, tipo='text', ...rest}:Props) {

    
    return (
        <div className={styles.inputAuth}>
            <input className= {styles.input} type={tipo} placeholder={placeHol} {...rest} />
        </div>
        
    )
}




