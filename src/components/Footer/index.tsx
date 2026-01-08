import fincoreFooter from '@/assets/FINCORE FOOTER.svg'

import styles from './styles.module.css'

export function Footer () {
    return (
        <div className= {styles.footer}>
            <img src={fincoreFooter} alt="FINCORE FOOTER"/>
        </div>
    )
}