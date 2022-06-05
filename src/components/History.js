import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';


export default function History(){
    return(
        <HistoryStyle>
            <Header></Header>
            <MainCard></MainCard>
            <MeioCard>
                <h3>Média de Qtd. <br></br> de Energia (kWh) <br/> <br/> <span>1.2</span></h3>
                <h3>Média de Preço <br></br> de Energia (kWh) <br/> <br/> <span>80,00</span></h3>
                <h3>Valor Total Gasto <br></br> Anualmente (kWh) <br/> <br/> <span>3200,00</span></h3>
            </MeioCard>
            <TextInputCard> Seus Inputs </TextInputCard>
            <FormCard></FormCard>
            <Footer></Footer>
        </HistoryStyle>
    );
}

const HistoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 700px;
    width: 100%;
    background: #F5F5F5;
`;

const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 160px;

    margin-top 20px;
    margin-bottom: 10px;

    outline: 0;
`;

const MeioCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    border: 0;
    border-radius: 15px;
    height: 80px;

    outline: 0;

    h3 {
        font-size:  10px;
        color:  #212121;

        border-left: 2px solid #D9D9D9;
        text-align: center;
        float: left;
        width: 33%;
        height: 40px;

        span{
            font-size:  16px;
            font-weight: bold;
        }

        :first-child{
            border-left: none
        };
    }
`;

const TextInputCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    font-family: Lato, Helvetica, sans-serif
    font-size:   16px;
    color:  #212121;
    font-weight:  bold;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 40px;

    margin-top 10px;
    margin-bottom: 10px;

    outline: 0;
`;

const FormCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 230px;

    margin-top 10px;
    margin-bottom: 10px;

    outline: 0;
`;