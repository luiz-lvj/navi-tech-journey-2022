import React from 'react';
import logoWhite from '../imgs/Logo_White.png';
import arrow from "../imgs/Arrow.png";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Start(){
    const history = useNavigate();
    return(
        <StartStyle>

            <LogoStyle src={logoWhite} alt="" />
            <h2>
                Começar a economizar <br/> com a revolução solar
            </h2>

            <ArrowStyle onClick={() => history("/home")}>
                <img src={arrow} alt=""/>
            </ArrowStyle>

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
    }
`;

const LogoStyle = styled.img`
    margin-bottom: 80px;
    width: 100%;
    height: 179px;
`;

const ArrowStyle = styled.div`
    width: 50px;
    height: 50px;
    background: #8DEEF2;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    img{
        width: 30px;
        height: 16.07px;
    }
`;