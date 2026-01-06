import styles from './styles.module.css'

import flogo from '../../assets/FLogo.svg'
import eyes from '../../assets/Eye.svg'
import config from '../../assets/configurações.svg'
import cifron from '../../assets/cifron.svg'

import aba from '../../assets/aba.svg'
import graf from '../../assets/grafico visual.svg'



import { Footer } from '../../components/Footer'



export function Dashboard () {



    return (
        <div className={styles.dashboardPage}>

            <div className={styles.menuDiv}>
                <div className={styles.infoInit}>
                    <div className={styles.flogoDiv}>
                        <img src={flogo} alt="Letter F logo" />
                    </div>
                    <div className={styles.infoClient}>
                            <h3>
                                OLÁ, FINCORE
                            </h3>
                            <p>BANCO: BANCO DO BRASIL</p>
                    </div>
                </div>
                <div className={styles.EyesNdConfig}>
                    <button className={styles.buttonEyesNCfg} >
                        <img className={styles.eyesNCfg} src={eyes} alt="eyes" />
            
                    </button>
            
                    <button className={styles.buttonEyesNCfg}>
                        <img className={styles.eyesNCfg} src={config} alt="configurations" />
                    </button>
                </div>
            </div>


            <div className={styles.main}>
                    <div className={styles.dashboardName}>
                        <h1>DASHBOARD</h1>
                    </div>
            </div>
{/*            CARDS              */}
            <div className={styles.cards}>

                {/* card 1 */}
                <div className={styles.cardFinance}>
                    <div className={styles.cardFinanceOne}>

                        <div className={styles.cardFinanceSandP}>
                            <img src={cifron} alt="Cifrão" />
                            <p>SALDO CONSOLIDADO</p>
                        </div>

                        <img className={styles.aba} src={aba} alt="+" />    
                    </div>

                    <div className={styles.cardFinanceTwo}>
                        <div className={styles.moedaNValue}>
                            <p className={styles.moeda}>MOEDA BRASILEIRA</p>
                            <h2 className={styles.value}>R$ 19,023,093</h2>
                        </div>
                        <div className={styles.indicador}>
                        
                                <h4 className={styles.h4indic}>2.48%</h4>
                        </div>
                    </div>

                </div>

                {/* card 2 */}
                <div className={styles.cardFinance}>
                    <div className={styles.cardFinanceOne}>

                        <div className={styles.cardFinanceSandP}>
                            <img src={cifron} alt="Cifrão" />
                            <p>RECEITA DO PERÍODO</p>
                        </div>

                        <img className={styles.aba} src={aba} alt="+" />    
                    </div>

                    <div className={styles.cardFinanceTwo}>
                        <div className={styles.moedaNValue}>
                            <p className={styles.moeda}>MOEDA BRASILEIRA</p>
                            <h2 className={styles.value}>R$ 1,023,093</h2>
                        </div>
                        <div className={styles.indicadorN}>
                        
                                <h4 className={styles.h4indic}>-5.48%</h4>
                        </div>
                    </div>

                </div>


                {/* card 3 */}
                <div className={styles.cardFinance}>
                    <div className={styles.cardFinanceOne}>

                        <div className={styles.cardFinanceSandP}>
                            <img src={cifron} alt="Cifrão" />
                            <p>DESPESAS DO PERÍODO</p>
                        </div>

                        <img className={styles.aba} src={aba} alt="+" />    
                    </div>

                    <div className={styles.cardFinanceTwo}>
                        <div className={styles.moedaNValue}>
                            <p className={styles.moeda}>MOEDA BRASILEIRA</p>
                            <h2 className={styles.value}>R$ 9,023,093</h2>
                        </div>
                        <div className={styles.indicador}>
                        
                                <h4 className={styles.h4indic}>1.38%</h4>
                        </div>
                    </div>

                </div>



            </div>

{/*            GRÁFICO              */}
            <div className={styles.grafico}>
                    
                <div className={styles.titleCard}>
                    <div className={styles.cardFinanceSandP}>
                        <img src={cifron} alt="Cifrão" />
                        <p>FLUXO DE CAIXA</p>
                    </div>
                    <div>
                    <img src={graf} alt="Gráfico" />
                    </div>
                </div>

                
                    
                
            </div>

            <Footer/>
        </div>
    )
}