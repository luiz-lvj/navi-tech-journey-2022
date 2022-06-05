import React from 'react';
import ParkCard from "./ParkCard";
import InfoCard from "./InfoCard";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import styled from 'styled-components';
import painelSolar1 from '../imgs/painel_solar1.png'

export default function Home(){

    const listParks = [1,2,3,4,5]
    return(
        <HomeStyle>
            <HeaderHome></HeaderHome>
            <HomeContent>

                <ParksList>
                    <ParkCard
                    title ="PARQUE SOLAR MRV II"
                    image={painelSolar1}
                    type ="NOSSA RECOMENDAÇÃO"
                    value1="4.2"
                    stat1="Energia Produzida"
                    value2="125,00"
                    stat2="Valor da Cota"
                    />

                    {listParks.map( park =>{
                        return(
                        <ParkCard
                        title ="PARQUE SOLAR MRV II"
                        image={painelSolar1}
                        type ="NOSSA RECOMENDAÇÃO"
                        value1="4.2"
                        stat1="Energia Produzida"
                        value2="125,00"
                        stat2="Valor da Cota"
                        />

                        );
                    } )}
                    


                    <InfoCard
                    title ="title"
                    image={painelSolar1}
                    type ="type"
                    text="text"
                    />
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
    height: 740px;

    background: #F5F5F5;
        
`;

const HomeContent = styled.div`
    position: center;
    left: 0;
    right: 0;
    top: 85px;
    bottom: 57px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
    
`;

const ParksList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;

`;
