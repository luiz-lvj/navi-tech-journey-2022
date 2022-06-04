import React from 'react';
import logoWhite from '../imgs/Logo_White.png';
import styled from 'styled-components';

export default function Start(){
    return(
        <StartStyle>

            <img src={logoWhite} alt=""/>

        </StartStyle>
    );
}

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 10%;
        height: 5%;
    }


`;