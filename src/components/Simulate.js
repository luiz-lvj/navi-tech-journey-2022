import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';


export default function Simulate(){
    return(
        <SimulateStyle>
            <Header></Header>
            <Footer></Footer>
        </SimulateStyle>
    );
}

const SimulateStyle = styled.div`
background: white;
`;
