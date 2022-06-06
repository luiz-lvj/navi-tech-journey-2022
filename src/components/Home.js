import React from 'react';
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import styled from 'styled-components';
import ParkData from "../constants/ParkData";
import BarGraph from './BarGraph';

export default function Home(props){

    const months = ["D", "J", "F", "M", "A", "M", "J"];
    const numbers = [100, 120, 130, 140, 160, 170, 190];
    return(
        <HomeStyle>
            <HeaderHome userName={props.userName} ></HeaderHome>
            <HomeContent>
                <TopHomePage>
                    <InfoHomePage>
                        <div>
                            <BarGraph
                            width={180}
                            title="Evolução de GD (Brasil)"
                            months={months}
                            numbers={numbers}
                            />
                        </div>
                        <RightInfoPage>
                            <div>
                                <h2>7.4 kWh <span>&uarr;</span> </h2>
                                <p>Energia Solar Produzida</p>
                            </div>
                           <div>
                               <h3>4.2 ton <span>&darr;</span> </h3>
                               <p>Redução de CO2 Gerada</p>
                           </div>
                           
                        </RightInfoPage>
                    
                    </InfoHomePage>
                    <DataInfos>
                        <h3>Média de Qtd. <br></br> de Energia (kWh) <br /> <br /> <span>1.2</span></h3>
                        <h3>Média de Preço <br></br> de Energia (R$/kWh) <br /> <br /> <span>80,00</span></h3>
                        <h3>Valor Total Gasto <br></br> Anualmente (R$) <br /> <br /> <span>3200,00</span></h3>
                    </DataInfos>
                </TopHomePage>
                
                <ParksList>
                    <ParkData home={true}/>
                </ParksList>
            </HomeContent>
            <Footer></Footer>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    background: #F5F5F5;
        
`;

const HomeContent = styled.div`
    padding-top:10px; 
    position: fixed;
    left: 0;
    right: 0;
    top: 85px;
    bottom: 57px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
    background: #F5F5F5;
    
`;

const ParksList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;
    padding-left: 2%;
    background: #F0F0F0;
`;


const TopHomePage = styled.div`
    border-radius: 10px;
    height: 210px;
    width: 95%;
    background: #FFFFFF;
    margin-left: 2%;
`;

const InfoHomePage = styled.div`
    width: 100%;
    border-radius: 10px;
    padding-left: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 3%;
    margin-bottom: 20px;

    div {
        margin-left: 5px;
    }
`;

const RightInfoPage = styled.div`
    width: 50%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    text-align: center;
    justify-content: space-between;
    background: #FFFFFF;

    div {
        margin-left: 0px;
    }
    h2{
        font-weight: bold;
        margin-bottom: 10px;
        span{
            color: #8DEEF2;
            font-size: 20px;
        }
    }
    h3{
        font-weight: bold;
        margin-bottom: 10px;
        span{
            color: #A800FF;
            font-size: 20px;
        }

    }
    p{
        color: #696969;
        font-size: 11px;

    }
`;
const DataInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    margin-bottom: 20px;

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
