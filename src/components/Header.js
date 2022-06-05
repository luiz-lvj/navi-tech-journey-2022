
import React from "react";
import Menu from "../imgs/icone_menu_1.png";
import Logo from "../imgs/Logo_Purple.png";
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

const Header = () => {

    function HeaderView() {
        const location = useLocation();
        switch (location.pathname) {
            case "/home":
                return <span>Home</span>
            case "/history":
                return <span>Seu Histórico</span>
            case "/parklist":
                return <span>Nossos Parques</span>
            case "/simulate":
                return <span>Simulação</span>
            default:
                return <span> </span>
        }
    }

    return (
        <Box>
            <LeftHeader>
                <i className="Logo">
                    <LogoStyle>
                        <img src={Logo} alt="Logo" />
                    </LogoStyle>
                </i>
                <i className="Nome-cliente">
                    <NameStyle>

                        {HeaderView()}

                    </NameStyle>
                </i>
            </LeftHeader>

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
    margin-top: 10 px;
    img{
        height: 50px;
    }
`;
const NameStyle = styled.div`
    
    color: #A800FF;
    margin-top: 20px;
    margin-left: 15px;

    font-family: "Lato", Helvetica, sans-serif
    font-size: 16px;
    font-weight: bold;

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
    background: #FFFFFF;
    flex-direction: row;
    bottom: 0;
    padding-left: 0%;
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
    align-items: center;
    text-align: center
    justify-content: center;
    width: 80%;
`;
