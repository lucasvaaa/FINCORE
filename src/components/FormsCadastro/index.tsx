import styles from './styles.module.css'
import { InputAuth } from '../InputAuth'
import { Button } from '../Button'

export function FormsCadastro() {
    return (
        <div className={styles.forms}>

            <h1 className={styles.h1forms}>Cadastrar-se</h1>

                <div className={styles.lineUm}>
                    <div className={styles.h2andInput}>
                        <h3>First Name</h3>
                        <InputAuth placeholder='First Name' tipo='text'/>
                    </div>
                    <div className={styles.h2andInput}>
                        <h3>Last Name</h3>
                        <InputAuth placeholder='Last Name' tipo='text'/>
                    </div>
                </div>
                <div className={styles.lineDois}>
                    <div className={styles.cpfandInput}>
                        <h3>CPF - Cadastro de Pessoa Física</h3>
                        <input className={styles.inputcpf} placeholder='Ex.: 123.456.789-01' type='text'/> 
                    </div>
                </div>
                <div className={styles.lineUm}>
                    <div className={styles.h2andInput}>
                        <h3>Password</h3>
                        <InputAuth placeholder='Password' tipo='password'/>
                    </div>
                    <div className={styles.h2andInput}>
                        <h3>Confirm Your Password</h3>
                        <InputAuth placeholder='Password' tipo='password'/>
                    </div>
                </div>
            
            <div className={styles.submitLink}>
                <Button title='Cadastrar-se' to='/dashboard' type='submit'/>
                <p>Já tem Login? <a className={styles.link} href="/login">Login</a></p>
            </div> 
        </div>
    )
}