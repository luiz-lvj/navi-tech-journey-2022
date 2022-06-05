import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';


export default function ParkList(){
    return(
        <ParkListStyle>
            <Header></Header>
            <Footer></Footer>
        </ParkListStyle>
    );
}

const ParkListStyle = styled.div`
background: white;
`;
