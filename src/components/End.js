import React from 'react';
import logoWhite from '../imgs/Logo_White.png';
import styled from 'styled-components';

export default function End(){
    return(
        <StartStyle>

            <LogoStyle src={logoWhite} alt="" />
            <h2>
                VOCÊ AGORA FAZ PARTE <br/> DA REVOLUÇÃO SOLAR
            </h2>

        </StartStyle>
    );
}

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    background: #A800FF;
    padding-top: 150px;
    padding-bottom: 100px;
    
    h2{
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
        font-size: 16 px;
    }
`;

const LogoStyle = styled.img`
    margin-bottom: 80px;
    width: 100%;
    height: 179px;
`;
