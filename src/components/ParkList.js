import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import ParkData from "../constants/ParkData";

export default function ParkList() {
    const listParks = [1, 2, 3, 4, 5]
    return (
        <ParkListStyle>
            <Header></Header>
            <ParkData home={false}/>
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
    overflow: scroll;
    background: #FFFFFF;
    
`;

