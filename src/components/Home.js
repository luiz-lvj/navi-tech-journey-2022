import React from 'react';
import ParkCard from "./ParkCard";
import InfoCard from "./InfoCard";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import styled from 'styled-components';
import painelSolar1 from '../imgs/painel_solar1.png'

export default function Home(){
    return(
        <HomeStyle>
            <HeaderHome></HeaderHome>

            <ParkCard
            title ="PARQUE SOLAR MRV II"
            image={painelSolar1}
            type ="NOSSA RECOMENDAÇÃO"
            value1="4.2"
            stat1="Energia Produzida"
            value2="125,00"
            stat2="Valor da Cota"
            />

            <InfoCard
            title ="title"
            image={painelSolar1}
            type ="type"
            text="text"
            />
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
    height: 740px;

    background: #F5F5F5;
        
`;