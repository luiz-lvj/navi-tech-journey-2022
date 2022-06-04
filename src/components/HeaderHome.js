
import React from "react";
import Cliente from "../imgs/cliente.png";
import MenuHOME from "../imgs/icone_menu_0.png";
import styled from 'styled-components';

const Header=() => {
    
        return (
            <Box>
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
export default Header;

const ClienteStyle = styled.div`
 margin-left: 40px; 
 margin-top: 30px;
    img{
        width: 70px;
        height: 70px;
    }
border: 5px solid #8DEEF2;
border-radius: 75px;
`;
const NameStyle = styled.div`
 margin-left: 15px; 
 margin-top: 57px;
 color: white;
 font-size: 20px;

`;
const MenuStyle = styled.div`
 margin-left: 54px; 
 margin-top: 20px;
    img{
        width: 30px;
        height: 30px;
    }
`;


export const Box = styled.div`
height: 90px;
width: 390px;
margin-top: 0px;
border-radius: 0px;
background: #A800FF;
display: flex;
bottom: 0;
`;

export const Column = styled.div`
display: inline-block;
`;

export const HeaderLink = styled.a`
`;

