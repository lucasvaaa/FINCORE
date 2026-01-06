import { ImagemAuth } from '../../components/ImagemAuth'
import styles from './styles.module.css'
import { FormsCadastro } from '../../components/FormsCadastro'

export function Cadastro () {
    return (
        <div className={styles.auth}>
                <ImagemAuth/>
                <FormsCadastro/>    
        </div>
    ) 
}