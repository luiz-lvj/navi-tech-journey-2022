import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import assets from "../constants/assets";
import ParkCard from './ParkCard';
import mapPanel from '../imgs/map_panel1.png';
import { useNavigate } from 'react-router-dom';

export default function Park() {

    const history = useNavigate();

    return (
        <ParkListStyle>
            <Header></Header>
            <MainCard>
            <ParkContent>
                <ParkCard
                id = "01"
                CardType='RecomendClient'
                title='PARQUE SOLAR MRV II'
                value1='4.2'
                value2='125,00'
                image={assets.park01}
                />
            </ParkContent>

            <p>Localização</p>

            <MapCard>
                <left>Av. Guadalupe 170 <br/> Jardim América <br/> São José dos Campos, SP <br/> Rede Distribuidora EDP</left>
                <img src={mapPanel} alt=""/>
            </MapCard>

            <HorizontalLine/>

            <p>Evolução da Energia Produzida</p>

            <GraphCard></GraphCard>

            <HorizontalLine/>

            <p>Dados sobre o Parque Solar</p>

            <InfoCard>
                <left>Número de Cotistas: 821 <br/> Empresa Adminstradora: MRV <br/> Data de Fundação: Jun 2020</left>
                <right>
                    <div1>Muito Bom <MyElipse/></div1>
                    <div2>24,43  (R$/kWh)</div2>
                </right>
            </InfoCard>

            </MainCard>
            <ButtonStyle onClick={() => history("/simulate")}> Simule seu histórico com este <span> parque solar!</span> </ButtonStyle>
            <Footer></Footer>
        </ParkListStyle>
    );
}

const ParkListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 740px;
    overflow: scroll;
    background: #F5F5F5;
`;

const ParkContent = styled.div`
    position: center;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;
    
`;

const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 97%;

    background: #FFFFFF;

    border: 0;
    border-radius: 15px;
    height: 525px;

    margin-top: 20px;
    margin-bottom: 15px;

    p {
        font-size: 16px;
        font-weight: bold;
        color: #A800FF;

        margin-top: 5px;
    }
`;

const MapCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 140px;
    width: 100%;

    margin-bottom: 10px;

    left {
        width: 60%;
        height: 80%;
        text-indent: 0px;
        line-height: 15px;

        margin-top: 20px;
        margin-left: 20px;

        font-size: 12px;
        font-weight: normal;
        color: #212121;
    }

    img {
        width: 25%;

        margin-top: 4%;
        margin-left: 8%;
        margin-right: 6%;

        border: 2px solid #A800FF;
        border-radius: 10px;

        background: #A800FF;
    }
`;

const GraphCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 100%;

    background: #F0F0F0;

    margin-bottom: 10px;
`;

const InfoCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 150px;
    width: 100%;

    left {
        width: 60%;
        height: 80%;
        text-indent: 0px;
        line-height: 15px;

        margin-top: 25px;
        margin-left: 20px;

        font-size: 12px;
        font-weight: normal;
        color: #212121;
    }

    right {
        display: flex;
        flex-direction: column;

        width: 40%;
        height: 80%;
        text-indent: 0px;
        line-height: 15px;

        margin-top: 15px;
        margin-right: 15px;

        font-size: 12px;
        font-weight: normal;
        color: #212121;

        div1 {
            display: flex;
            flex-direction: row;
            margin-top: 5%;
            margin-bottom: 10%;
            font-size: 16px;
            font-weight: bold;
            text-indent: 10px;
        }

        div2 {
            font-size: 12px;
            font-weight: bold;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background: #8DEEF2;
            border-radius: 10px;
        }
    }
`;

const MyElipse = styled.div`
    margin-left: 10px;

    width: 16px;
    height: 16px;
    border-radius: 16px;
    border: 3px solid #212121;
    background: #00FF75;
`;

const HorizontalLine = styled.div`
    height: 2px;
    width: 92%;

    border-radius: 5px;
    background: #D9D9D9;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const ButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 97%;

    font-size:   10px;
    color:  #FFFFFF;
    font-weight: bold;
    font-style:  italic;

    border-radius: 15px;
    background: #A800FF;
    height: 30px;

    border: 0;
    outline: 0;

    span {
        color: #8DEEF2;
        white-space:pre;
    }
`;