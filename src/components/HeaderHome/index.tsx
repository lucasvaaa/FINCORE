import logo from '../../assets/Fincore-Branco.svg'
import f3d from '../../assets/F3D.png'
import fincoreBg from '../../assets/FINCORE BG.svg'
import styles from './styles.module.css'

import { Button } from '../Button'

export function HeaderHome() {
    return (
        <div>
            <div className= {styles.headerHome}>
                
                <Button title={<img className={styles.logobranco} src={logo} alt="LOGO BRANCO"/>} color='dark' to='/' />
                <div className= {styles.contentButtons}>
                    <Button title='Cadastrar-se' to='/cadastro'/>
                    <Button title='Login' color='black' to='/login' />
                </div>
            </div>

            <div className={styles.contentMain}>
                <img src={fincoreBg} alt='FINCORE FUNDO' className= {styles.fbg} />
                <img src={f3d} alt="3D FINCORE" className= {styles.f3d} />

                <div className={styles.contentTitulo}>
                    
                    <h1 className={styles.titulo}>CLAREZA FINANCEIRA, CONTROLE OPERACIONAL <span className={styles.fontDiferent}> & </span>DECISÕES SEGURAS</h1>
                    <p className={styles.subtitle}>A FINCORE centraliza dados financeiros e operacionais, automatiza análises críticas e reduz erros humanos em ambientes bancários e empresas financeiras.</p>
                </div>
            </div>
        </div>
    )
}