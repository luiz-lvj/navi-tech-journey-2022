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
    // constructor(){
    //     super()
         
    //     this.state = {msg : 'Hi, There!'}
         
    //     handleClick = () {
    //         this.setState({msg : 'Welcome to the React world!'})
    //     }
    // }

    return (
        <Box>
            <Column>
                <FooterLink href="./home">
                    <i className="icone-home">
                        <HomeStyle>
                            <img src={HomeGO} alt="Home" />
                        </HomeStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink href="./history">
                    <i className="icone-history">
                        <HistStyle>
                            <img src={HistGO} alt="History" />
                        </HistStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink href="./parklist">
                    <i className="icone-parks">
                        <PanelStyle>
                            <img src={PanelGO} alt="Parks" />
                        </PanelStyle>
                    </i>
                </FooterLink>
            </Column>
            <Column>
                <FooterLink href="./simulate">
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

