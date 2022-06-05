import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';


export default function History(){
    return(
        <HistoryStyle>
            <Header></Header>
            <Footer></Footer>
        </HistoryStyle>
    );
}

const HistoryStyle = styled.div`
background: white;
`;
