import styles from './styles.module.css'

import { ImagemAuth } from '@/components/ImagemAuth'
import { FormsLogin } from '@/components/FormsLogin'

export function Login () {
    return (
        <div className={styles.auth}>
                <ImagemAuth/>
                <FormsLogin/>    
        </div>
    ) 
}