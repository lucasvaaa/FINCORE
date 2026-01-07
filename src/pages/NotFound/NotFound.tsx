import styles from './styles.module.css'

export function NotFound () {
    return (
        <div className={styles.main}>
            <div className={styles.texts}>
                <h2>NOT FOUND</h2>
                <h2 className={styles.green}>PAGE 404</h2>
            </div>
        </div>
    
    )
}