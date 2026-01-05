import styles from './styles.module.css'
import { InputAuth } from '../InputAuth'
import { Button } from '../Button'

export function FormsCadastro() {
    return (
        <div className={styles.forms}>

            <h1 className={styles.h1forms}>Cadastrar-se</h1>

                <div className={styles.lineUm}>
                    <div className={styles.h2andInput}>
                        <h2>First Name</h2>
                        <InputAuth placeholder='First Name' tipo='text'/>
                    </div>
                    <div className={styles.h2andInput}>
                        <h2>Last Name</h2>
                        <InputAuth placeholder='Last Name' tipo='text'/>
                    </div>
                </div>
                <div className={styles.lineDois}>
                    <div className={styles.cpfandInput}>
                        <h2>CPF - Cadastro de Pessoa Física</h2>
                        <input className={styles.inputcpf} placeholder='Ex.: 123.456.789-01' type='text'/> 
                    </div>
                </div>
                <div className={styles.lineUm}>
                    <div className={styles.h2andInput}>
                        <h2>Password</h2>
                        <InputAuth placeholder='Password' tipo='password'/>
                    </div>
                    <div className={styles.h2andInput}>
                        <h2>Confirm Your Password</h2>
                        <InputAuth placeholder='Password' tipo='password'/>
                    </div>
                </div>
            
            <Button title='Cadastrar-se' to='/dashboard' type='submit'/>
        </div>
    )
}