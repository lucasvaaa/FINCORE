import styles from './styles.module.css'

import { Button } from '@/components/Button'

export function FormsLogin() {
    return (
        <div className={styles.forms}>

            <h1 className={styles.h1forms}>Login</h1>

                <div className={styles.lineDois}>
                    <div className={styles.cpfandInput}>
                        <h3>CPF - Cadastro de Pessoa Física</h3>
                        <input className={styles.inputcpf} placeholder='Ex.: 123.456.789-01' type='text'/> 
                    </div>
                </div>

                <div className={styles.lineDois}>
                    <div className={styles.cpfandInput}>
                        <h3>Password</h3>
                        <input className={styles.inputcpf} placeholder='Password' type='password'/> 
                    </div>
                </div>

            
            <div className={styles.submitLink}>
                <Button title='Logar-se' to='/dashboard' type='submit'/>
                <p>Ainda não tem <br /> Cadastro? <a className={styles.link} href="/cadastro">Cadastro</a></p>
            </div> 
        </div>
    )
}