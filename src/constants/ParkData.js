import React from 'react';
import styled from 'styled-components';
import assets from "./assets";
import ParkCard from "../components/ParkCard";
import { useNavigate } from 'react-router-dom';

const ParkData = (props) => {
    const home = props.home;


    if (home) {
        return (
            <ParkContent1>
                <ParksList>
                    <ParkCard id="01"
                        CardType='RecomendClient'
                        title='PARQUE SOLAR MRV II'
                        value1='4.2'
                        value2='125,00'
                        image={assets.park01}
                    />
                    <ParkCard id="02"
                        CardType='RecomendPublic'
                        title="FAZENDA SOLAR EDP"
                        value1="7.3"
                        value2="180,00"
                        image={assets.park02}
                    />
                    <ParkCard id="00"
                        CardType='Special'
                        title="PROTOCOLO DE KYOTO"
                        image={assets.inform}
                        value1=''
                        value2=''
                        stat1="Clique neste card para saber mais sobre os créditos de carbono e a importância de preservar o planeta usando energia solar"
                    />
                </ParksList>
            </ParkContent1>
        );
    }
    else {
        return (
            <ParkContent2>
                <ParksList>
                    <ParkCard id="01"
                        CardType='RecomendClient'
                        title='PARQUE SOLAR MRV II'
                        value1='4.2'
                        value2='125,00'
                        image={assets.park01}
                    />
                    <ParkCard id="02"
                        CardType='RecomendPublic'
                        title="FAZENDA SOLAR EDP"
                        value1="7.3"
                        value2="180,00"
                        image={assets.park02}
                    />
                    <ParkCard id="06"
                        CardType='Private'
                        title="PAINEL LOCALPOWER"
                        value1="4.7"
                        value2="400,00"
                        image={assets.park06}
                    />
                    <ParkCard id="03"
                        CardType='Simple'
                        title="PARQUE CONARIS"
                        value1="5.2"
                        value2="160,00"
                        image={assets.park03}
                    />
                    <ParkCard id="04"
                        CardType='Simple'
                        title="USINA SOLAR XSX IV"
                        value1="2.1"
                        value2="90,00"
                        image={assets.park04}
                    />
                    <ParkCard id="05"
                        CardType='Simple'
                        title="FAZENDA SOLAR JHG"
                        value1="3.6"
                        value2="135,00"
                        image={assets.park05}
                    />
                </ParksList>
            </ParkContent2>
        );
    }
}

export default ParkData;

const ParksList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;

`;

const ParkContent1 = styled.div`
    padding-top:10px; 
    padding-bottom: 0px;
    position: center;
    left: 0;
    right: 0;
    top: 85px;
    bottom: 57px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ParkContent2 = styled.div`
    padding-top:20px; 
    padding-bottom: 45px;
    position: center;
    left: 0;
    right: 0;
    top: 85px;
    bottom: 57px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
