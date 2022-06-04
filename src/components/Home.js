import React from 'react';
import Footer from "./Footer";
import Header from "./HeaderHome";
import styled from 'styled-components';

export default function Home(){
    return(
        <HomeStyle>
            <Header></Header>
            <Footer></Footer>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
background: white;
`;
