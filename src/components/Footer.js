import React from "react";
import HomeGO from "../imgs/home_icon_0.png";
import HomeYET from "../imgs/home_icon_1.png";
import HistGO from "../imgs/icon_hist_0.png";
import HistYET from "../imgs/icon_hist_1.png";
import PanelGO from "../imgs/icon_panel_0.png";
import PanelYET from "../imgs/icon_panel_1.png";
import SimGO from "../imgs/icon_sim_0.png";
import SimYET from "../imgs/icon_sim_1.png";
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";


const Footer = () => {
    const history = useNavigate();
    const location = useLocation();

    return (
        <Box>
            <Column>
                <FooterLink >
                    <i className="icone-home">
                        <HomeStyle>
                            <img 
                            onClick={() => history("/home")}
                            src={location.pathname == "/home" ? HomeYET : HomeGO}
                            alt="Home" />
                        </HomeStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink >
                    <i className="icone-history">
                        <HistStyle>
                            <img
                            onClick={() => history("/history")}
                            src={location.pathname == "/history" ? HistYET : HistGO}
                            alt="History" />
                        </HistStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink >
                    <i className="icone-parks">
                        <PanelStyle>
                            <img 
                            onClick={() => history("/parklist")}
                            src={location.pathname == "/parklist" ?  PanelYET : PanelGO}
                            alt="Parks" />
                        </PanelStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink>
                    <i className="icone-simulate">
                        <SimStyle>
                            <img  
                            onClick={() => history("/simulate")}
                            src={ location.pathname == "/simulate" ? SimYET : SimGO }
                            alt="Simulate" />
                        </SimStyle>
                    </i>
                </FooterLink>
            </Column>
        </Box>
    );
};
export default Footer;
const HomeStyle = styled.div`
    margin-top: 12px;
    img{
        width: 30px;
        height: 30px;
    }
`;
const HistStyle = styled.div`
    margin-top: 12px;
    img{
        width: 30px;
        height: 30px;
    }
`;
const PanelStyle = styled.div`
    margin-top: 12px;
    img{
        width: 30px;
        height: 30px;
    }
`;
const SimStyle = styled.div`
    margin-top: 12px;
    img{
        width: 30px;
        height: 30px;
    }
`;

export const Box = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 12%;
    padding-right: 12%;
    height: 55px;
    border-radius: 0px;
    background: white;
`;

export const Column = styled.div`
display: inline-block;
`;

export const FooterLink = styled.a`
`;

