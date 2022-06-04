
import React from "react";
import Menu from "../imgs/icone_menu_1.png";
import Logo from "../imgs/Logo_Purple.png";
import styled from 'styled-components';

const Header=() => {

        return (
            <Box>
                <Column>
                        <i className="Logo">
                            <LogoStyle>
                                <img src={Logo} alt="Logo" />
                            </LogoStyle>
                        </i>
                </Column>
                <Column>
                        <i className="Nome-cliente">
                            <NameStyle>
                                
                                    Seu histórico
                                
                            </NameStyle>
                        </i>
                </Column>
                <Column>
                    <HeaderLink href="./Menu">
                        <i className="icone-history">
                            <MenuStyle>
                                <img src={Menu} alt="Menu" />
                            </MenuStyle>
                        </i>
                    </HeaderLink>
                </Column>
            </Box>
    );   
};
export default Header;

const LogoStyle = styled.div`
 margin-left: 0px; 
 margin-top: 20px;
    img{
        width: 100px;
        height: 45.8px;
    }

`;
const NameStyle = styled.div`
 margin-left: 0px; 
 margin-top: 40px;
 color: #A800FF;
 font-size: 14px;


`;
const MenuStyle = styled.div`
 margin-left: 140px; 
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
background: white;
display: flex;
bottom: 0;
`;

export const Column = styled.div`
display: inline-block;
`;

export const HeaderLink = styled.a`
`;

