import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import painelSolar1 from '../imgs/painel_solar1.png';
import ParkCard from "./ParkCard";
import InfoCard from "./InfoCard";

export default function ParkList() {
    const listParks = [1, 2, 3, 4, 5]
    return (
        <ParkListStyle>
            <Header></Header>
            <ParkContent>
                <ParksList>
                    <ParkCard
                        title="PARQUE SOLAR MRV II"
                        image={painelSolar1}
                        type="NOSSA RECOMENDAÇÃO"
                        value1="4.2"
                        stat1="Energia Produzida"
                        value2="125,00"
                        stat2="Valor da Cota"
                    />

                    {listParks.map(park => {
                        return (
                            <ParkCard
                                title="PARQUE SOLAR MRV II"
                                image={painelSolar1}
                                type="NOSSA RECOMENDAÇÃO"
                                value1="4.2"
                                stat1="Energia Produzida"
                                value2="125,00"
                                stat2="Valor da Cota"
                            />

                        );
                    })}



                    <InfoCard
                        title="title"
                        image={painelSolar1}
                        type="type"
                        text="text"
                    />
                </ParksList>
            </ParkContent>
            <Footer></Footer>
        </ParkListStyle>
    );
}

const ParkListStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 740px;

    background: #FFFFFF;
    
`;

const ParksList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;

`;

const ParkContent = styled.div`
    padding-top:10px;    
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
