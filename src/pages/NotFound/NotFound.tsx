import styles from './styles.module.css'

export function NotFound () {
    return (
        <div className={styles.main}>
            <div className={styles.texts}>
                <h2 className={styles.h2}>
                    NOT FOUND <br /><span className={styles.green}>PAGE 404</span>
                </h2>
                
            </div>
        </div>
    
    )
}