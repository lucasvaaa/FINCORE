import styled from "styled-components";



export const dashboardPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;


 
 
 /*  Menu Div */
export const menuDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 40px 60px 40px;
    padding-top:32px ;
    

`

export const infoInit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;

`
export const flogoDiv= styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    height: 54px;
    width: 54px;

    background-color: #163532;
    gap: 10px;

    border-radius: 8px;
    padding: 15px 16px;
` /*MU*/

export const infoClient = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1px;

`

export const p = styled.p `
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
`

/* Menu Div > div2 */

export const EyesNdConfig = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 43px;
`

export const buttonEyesNCfg = styled.div `
    background-color: #000;
    border: none;
`

export const eyesNCfg = styled.div `
    cursor: pointer;
    transform: filter 0.2s;
    transition: 0.5s ease;


    &:hover {
        filter:brightness(0.8);
    
        transition: 0.5s;
    }
`



/* Main Menu Dashboard */

/* .main `
    
` */

export const dashboardName = styled.div`
    display: flex;
    margin-left: 100px;
    padding: 10px;
`

export const cards= styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 20px;
`

export const cardFinance = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({theme})=> theme.colors.card};
    width: 392.55px;
    height: 135.32px;
    border-radius: 17px;
    padding: 16px;
    gap: 32px;

`
export const cardFinanceOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 392.55px;
    padding:0 16px;
    

`

export const cardFinanceSandP = styled.div`
    display: flex;
    flex-direction: row;
    gap: 11px;
    font-size: 12px;
    color: #f1fdd1;
`

export const aba = styled.div`
    height:8px;
`

export const cardFinanceTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 392.55px;
    padding:0 16px;
    
    
    
    align-items: flex-end;
`

export const moedaNValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 350px; /*IMPORTANTE MUDAR DEPOIS
    */
`

export const moeda = styled.div`
    font-size: 12px;
`

export const value = styled.div`
    font-size: 2rem;
`

export const indicador= styled.div`
    color: #01DF83;
    font-size: 20px;
    font-family: inter-light;
`

export const indicadorN = styled.div`
    color: #e30606;
    font-size: 20px;
    font-family: inter-light;
`

/* GRÁFICO */

export const grafico = styled.div`
    width: 1408;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #22252C;
    margin: 16px;
    border-radius: 40px;
    padding: 50px;

`

export const titleCard = styled.div`
    width: max-content;
    padding: 1rem;

`
export const title = styled.h3 `
    color: ${({ theme }) => theme.colors.text};

`

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const h1 =  styled.h1 `
    color: ${({ theme }) => theme.colors.text};
`