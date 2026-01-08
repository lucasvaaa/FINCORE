import { HeaderHome } from '@/components/HeaderHome/index.tsx'
import { MainHome } from '@/components/MainHome/index.tsx'
import { Footer } from '@/components/Footer/index.tsx'

import styles from './styles.module.css'

export function Home() {
    return (
        <div className={styles.contend}>
            
            
            <div className={styles.headerhome}><HeaderHome/></div>
            <div className={styles.mainhome}><MainHome/></div>
            <div className={styles.footer}><Footer/></div>
        </div>

    )
}