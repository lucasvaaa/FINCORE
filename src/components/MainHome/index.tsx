import styles from './styles.module.css'
import { Button } from '../Button'

import fincorefundo from '../../assets/FINCORE BG.svg'
import pattern from '../../assets/pattern.svg'
import fincore from '../../assets/FINCORE SMALL.svg'
import fincoreblur from '../../assets/F3DBLUR.png'

export function MainHome () {
    return (
        <div className= {styles.mainHome}>
            <div className= {styles.contendOne}>
                
                    <div className={styles.textOne}>
                        <h2>Transformamos dados dispersos <br /> e  processos manuais <span className={styles.span}>em informação <br /> confiável, rastreável e acionável.</span></h2>
                        <Button title='Quero Facilitar meu Trabalho' to='/cadastro'/>
                    </div>

                    <img src={fincorefundo}alt="FINCORE FUNDO" className={styles.fincorefundo} />

                    <img src={pattern} alt="PATTERN"  className={styles.pattern}/>
            </div>
            <div className= {styles.contendTwo}>

               
                    <div className= {styles.textTwo} >
                    
                        <img className={styles.small}  src={fincore} alt="FINCORE SMALL" />
                        <h2 className={styles.textRight}>Não é apenas</h2>
                        <h2 className={styles.textBottom}>Um sistema</h2>
                    </div>
                    <div className={styles.textThree}>
                        <img className={styles.fBlur} src={fincoreblur} alt="FINCORE 3D COM PEQUENO BLUR" />
                        <Button  title='Quero Facilitar meu Trabalho' to='/cadastro'/>
                    </div>
                    <div className={styles.textFour}>
                        <h2>É a base de decisão <br/>financeira confiável <br/>da sua operação.</h2>
                    </div>


            </div>
        </div>
    )
}