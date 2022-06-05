import React from 'react';
import logoWhite from '../imgs/Logo_White.png';
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import styled from 'styled-components';

export default function Home(){
    return(
        <HomeStyle>
            
            <HeaderHome></HeaderHome>
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

    background: #F0F0F0;
        
`;