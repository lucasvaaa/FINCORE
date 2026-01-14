
import { useTheme } from 'styled-components'
import { type ThemeType } from './theme'
import styles from './styles.module.css'
import * as S from "@/pages/Dashboard/styles"

import flogo from '@/assets/FLogo.svg'
import aba from '@/assets/aba.svg'


import { ThemeButton } from '@/components/ThemeButton'
import { Footer } from '@/components/Footer'

//import { DashboardThemeProvider } from './ThemeContext'





export function Dashboard () {
    const theme = useTheme() as ThemeType
    //console.log('theme.images:', theme.images)

    

    return (
        

        
            
            <S.PageWrapper>
                <S.dashboardPage>
                    <div className={styles.menuDiv}>
                        <div className={styles.infoInit}>
                            <div className={styles.flogoDiv}>
                                <img src={flogo} alt="Letter F logo" />
                            </div>
                            <div className={styles.infoClient}>
                                    <S.title>OLÁ, FINCORE</S.title>
                                    <S.p> BANCO: BANCO DO BRASIL</S.p>
                            </div>
                        </div>
                        <div className={styles.EyesNdConfig}>
                            {/* <button className={styles.buttonEyesNCfg} >
                                <img className={styles.eyesNCfg} src={eyes} alt="eyes" />
                
                            </button> */}
                
                            <ThemeButton/>
                        </div>
                    </div>
                    <div className={styles.main}>
                            <div className={styles.dashboardName}>
                                <S.h1>DASHBOARD</S.h1>
                            </div>
                    </div>
                {/*            CARDS              */}
                    <div className={styles.cards}>
                        {/* card 1 */}
                        <S.cardFinance>
                            
                                <div className={styles.cardFinanceOne}>
                                    <div className={styles.cardFinanceSandP}>

                                        <img src={theme.images?.cifrao} alt="Cifrão" />
                                        <S.p>SALDO CONSOLIDADO</S.p>

                                    </div>
                                    <img className={styles.aba} src={aba} alt="+" />
                                </div>
                                <div className={styles.cardFinanceTwo}>
                                    <div className={styles.moedaNValue}>
                                        <S.p>MOEDA BRASILEIRA</S.p>
                                        <S.h2>R$ 19,023,093</S.h2>
                                    </div>
                                    <div className={styles.indicador}>
                                            <h4 className={styles.h4indic}>2.48%</h4>
                                    </div>
                                </div>
                            
                        </S.cardFinance>
                        {/* card 2 */}


                        <S.cardFinance>
                            
                                <div className={styles.cardFinanceOne}>
                                    <div className={styles.cardFinanceSandP}>
                                        <img src={theme.images.cifrao} alt="Cifrão" />
                                        <S.p>RECEITA DO PERÍODO</S.p>
                                    </div>
                                    <img className={styles.aba} src={aba} alt="+" />
                                </div>
                                <div className={styles.cardFinanceTwo}>
                                    <div className={styles.moedaNValue}>
                                        <S.p>MOEDA BRASILEIRA</S.p>
                                        <S.h2>R$ 1,023,093</S.h2>
                                    </div>
                                    <div className={styles.indicadorN}>
                                            <h4 className={styles.h4indic}>-5.48%</h4>
                                    </div>
                                </div>
                        </S.cardFinance>
                       


                        {/* card 3 */}
                        <S.cardFinance>
                            <div className={styles.cardFinanceOne}>
                                <div className={styles.cardFinanceSandP}>
                                    <img src={theme.images.cifrao} alt="Cifrão" />
                                    <S.p>DESPESAS DO PERÍODO</S.p>
                                </div>
                                <img className={styles.aba} src={aba} alt="+" />
                            </div>
                            <div className={styles.cardFinanceTwo}>
                                <div className={styles.moedaNValue}>
                                        <S.p>MOEDA BRASILEIRA</S.p>
                                        <S.h2>R$ 9,023,093</S.h2>
                                </div>
                                <div className={styles.indicador}>
                
                                        <h4 className={styles.h4indic}>1.38%</h4>
                                </div>
                            </div>
                        </S.cardFinance>

                    </div>
                
                {/*            GRÁFICO              */}
                <S.grafico>
                    <div className={styles.titleCard}>
                        <div className={styles.cardFinanceSandP}>
                            <img src={theme.images.cifrao} alt="Cifrão" />
                            <S.p>FLUXO DE CAIXA</S.p>
                        </div>
                        <div>
                        <img src={theme.images.graf} alt="Gráfico" />
                        </div>
                    </div>
                </S.grafico>
                    <Footer/>
                </S.dashboardPage>
            </S.PageWrapper>
        
    )
}