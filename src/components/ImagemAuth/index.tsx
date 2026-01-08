import styles from './styles.module.css'
import blurImg from '@/assets/blur img.svg'
import fincoreImg from '@/assets/FINCORE IMG.svg'
import imgLogin from '@/assets/img login.svg'


export function ImagemAuth () {
    return (
        <div className={styles.imagens}>
            <img  className={styles.blur} src={blurImg} alt="blur da imagem" />
            <img  className={styles.fImg} src={fincoreImg} alt="fincore Imagem" />
            <img  className={styles.login} src={imgLogin} alt="imagem Login" />
        </div>
    )
}