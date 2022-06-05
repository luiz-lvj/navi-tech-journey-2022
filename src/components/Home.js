import React from 'react';
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import styled from 'styled-components';
import ParkData from "../constants/ParkData";

export default function Home(){

    const listParks = [1,2]
    return(
        <HomeStyle>
            <HeaderHome></HeaderHome>
            <HomeContent>
                
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
    height: 740px;

    background: #F5F5F5;
        
`;

const HomeContent = styled.div`
    padding-top:10px; 
    padding-bottom: 30px;
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
