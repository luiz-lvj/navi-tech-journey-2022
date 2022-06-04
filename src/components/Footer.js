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


const Footer = () => {
    return (
        <Box>
            <Column>
                <FooterLink href="./Home">
                    <i className="icone-home">
                        <HomeStyle>
                            <img src={HomeGO} alt="Home" />
                        </HomeStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink href="./History">
                    <i className="icone-history">
                        <HistStyle>
                            <img src={HistGO} alt="History" />
                        </HistStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink href="./ParkList">
                    <i className="icone-parks">
                        <PanelStyle>
                            <img src={PanelGO} alt="Parks" />
                        </PanelStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink href="./Simulate">
                    <i className="icone-simulate">
                        <SimStyle>
                            <img src={SimGO} alt="Simulate" />
                        </SimStyle>
                    </i>
                </FooterLink>
            </Column>
        </Box>
    );
};
export default Footer;
const HomeStyle = styled.div`
 margin-left: 54px; 
 margin-top: 9px;
    img{
        width: 30px;
        height: 30px;
    }
`;
const HistStyle = styled.div`
 margin-left: 54px;
 margin-top: 9px;
    img{
        width: 30px;
        height: 30px;
    }
`;
const PanelStyle = styled.div`
 margin-left: 54px; 
 margin-top: 9px;
    img{
        width: 30px;
        height: 30px;
    }
`;
const SimStyle = styled.div`
 margin-left: 54px; 
 margin-top: 9px;
    img{
        width: 30px;
        height: 30px;
    }
`;

export const Box = styled.div`
height: 55px;
width: 390px;
margin-top: 734px;
border-radius: 0px;
background: white;
display: flex;
bottom: 0;
`;

export const Column = styled.div`
display: inline-block;
`;

export const FooterLink = styled.a`
`;

