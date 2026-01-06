import { ImagemAuth } from '../../components/ImagemAuth'
import styles from './styles.module.css'
import { FormsLogin } from '../../components/FormsLogin'

export function Login () {
    return (
        <div className={styles.auth}>
                <ImagemAuth/>
                <FormsLogin/>    
        </div>
    ) 
}