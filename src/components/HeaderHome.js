
import React from "react";
import Cliente from "../imgs/cliente.png";
import MenuHOME from "../imgs/icone_menu_0.png";
import styled from 'styled-components';

const HeaderHome=() => {
    
        return (
            <Box>
                <LeftHeader>
                <Column>
                        <i className="Foto-perfil">
                            <ClienteStyle>
                                <img src={Cliente} alt="Foto de perfil" />
                            </ClienteStyle>
                        </i>
                </Column>
                <Column>
                        <i className="Nome-cliente">
                            <NameStyle>
                                
                                    Olá, Bryan Borck
                                
                            </NameStyle>
                        </i>
                </Column>
                </LeftHeader>
                
                <Column>
                    <HeaderLink href="./Menu">
                        <i className="icone-history">
                            <MenuStyle>
                                <img src={MenuHOME} alt="Menu" />
                            </MenuStyle>
                        </i>
                    </HeaderLink>
                </Column>
            </Box>
    );

    
    
};
export default HeaderHome;

const ClienteStyle = styled.div`
    margin-top: 25px;
    img{
        width: 70px;
        height: 70px;
    }
    background: #8DEEF2; 
    border: 5px solid #8DEEF2;
    border-radius: 90px;
`;
const NameStyle = styled.div`
    color: white;

    font-family: "Lato", Helvetica, sans-serif
    font-size: 16px;
    font-weight: bold;

    margin-top: 20px;

`;
const MenuStyle = styled.div`
    margin-top: 15px;
    img{
        width: 30px;
        height: 30px;
    }
`;


export const Box = styled.div`
    display: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0 !important;
    height: 80px;
    width: 100%;
    min-width: 360px;
    background: #A800FF;
    flex-direction: row;
    bottom: 0;
    padding-left: 10%;
    padding-right: 7%;
    padding-top: 10px;

`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const HeaderLink = styled.a`
`;

const LeftHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
`;

