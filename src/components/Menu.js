import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';


export default function Menu(){
    return(
        <Box>
            <Header/>
            <MenuStyle>
                <h2>
                    Perfil
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2>
                    Adicionar carteira
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2>
                Configurações
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2>
                    Sair do perfil
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2>
                    Ajuda
                </h2>
            </MenuStyle>
            <Footer/>
        
        </Box>
    );
}

const Box = styled.div`
    background: #FFFFFF;
    width: 100%;
    height:740px;
`;
const MenuStyle = styled.div`
    background: #FFFFFF;
    border-bottom:1px solid #A800FF;
    width: 100%;
    height:55px;
    padding-top: 20px;
    text-align: center;
    color: #A800FF;
    font-style: italic;
    font-size:13px;
`;
