import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import ParkCard from './ParkCard';
import assets from '../constants/assets';
import { useState } from 'react';
import BigCardSimulate from './BigCardSimulate';
import simulImg from '../imgs/img_simul.PNG';


export default function Simulate() {
    const [myOption, setMyOption] = useState("Maio, 2022");

    const handleChange = (event) => {
        setMyOption(event.target.value)
    }

    const [list, setList] = useState([]);

    const [value, setValue] = useState("");

    const addToList = () => {
        if (value == "") {
            value = "0";
        }
        // for(let i = 0; )
        let tempArr = list;
        tempArr.push([myOption, value]);
        setList(tempArr);
        setValue("");
    };

    const [simulated, setSimulated] = useState(false);

    const simulate = () => {
        setSimulated(true);
    }

    return (
        <SimulateStyle>
            <Header></Header>
            <TopTextStyle>
                PARQUE SELECIONADO
            </TopTextStyle>
            <ParkCard id="01"
                CardType='RecomendClient'
                title='PARQUE SOLAR MRV II'
                value1='4.2'
                value2='125,00'
                image={assets.park01}
            />
            {/* <MyInputTitle><p>Mês do Aluguel</p><div>Valor do investimento</div></MyInputTitle> */}
            <InputArea>
                <select value={myOption} onChange={handleChange}>
                    <option value="Mai, 2022">Maio, 2022</option>
                    <option value="Abr, 2022">Abril, 2022</option>
                    <option value="Mar, 2022">Março, 2022</option>
                    <option value="Fev, 2022">Fevereiro, 2022</option>
                    <option value="Jan, 2022">Janeiro, 2022</option>
                    <option value="Dez, 2021">Dezembro, 2021</option>
                    <option value="Nov, 2021">Novembro, 2021</option>
                    <option value="Out, 2021">Outubro, 2021</option>
                    <option value="Set, 2021">Setembro, 2021</option>
                    <option value="Ago, 2021">Agosto, 2021</option>
                    <option value="Jul, 2021">Julho, 2021</option>
                    <option value="Jun, 2021">Junho, 2021</option>
                </select>
                <input
                    type="number"
                    placeholder="Valor do Investimento"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <MyButton onClick={simulate}> Simular </MyButton>
            </InputArea>

            
            {/*Simulation(simulated)*/}

            <EmptyCard>
               {simulated && <ImgSimul src={simulImg} alt=""/>}
                {simulated && <BigCardSimulate/>} 
            </EmptyCard>
            
            <Footer></Footer>
        </SimulateStyle>
    );
}
function FirstPurpleBox() {
    return (
        <PurpleBox1>
            <PurpleBoxText1>PREVISÃO DE GASTO DE ENERGIA</PurpleBoxText1>
            <PurpleBoxText2>Previsão de gasto na simulação</PurpleBoxText2>
            <BlueCard1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$ 400,00</BlueCard1>
            <BlueCard2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$ 100,00</BlueCard2>
            <EconomizadoBox>Economizado</EconomizadoBox>
            <EconomizadoValorBox>R$ 300,00</EconomizadoValorBox>
        </PurpleBox1>
    )

}

const EconomizadoValorBox = styled.div`
    left: 250px;
    top: 110px;


    width: 175px;
    height: 41px;

    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #A800FF;

`

const EconomizadoBox = styled.div`

    width: 170px;
    height: 37px;
    left: 87px;
    top: 113px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;

    color: #A800FF;

`

const PurpleBoxText1 = styled.div`

    width: 157px;
    height: 37px;
    left: 80px;
    top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #212121;
`

const PurpleBoxText2 = styled.div`

    width: 159px;
    height: 37px;
    left: 240px;
    top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #212121;
`

const PurpleBox1 = styled.div`

    left: 0;
    width: 100%;
    height: 100px;
    background-color: #A800FF;
    z-index: 10;
    border-radius: 10px;
`

const BlueCard1 = styled.div`
box-sizing: border-box;


width: 140px;
height: 28px;
top: 50px;
left: 90px;

background: #8DEEF2;
border: 1px solid #212121;
border-radius: 5px;

font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

`

const BlueCard2 = styled.div`
box-sizing: border-box;


width: 140px;
height: 28px;

top: 50px;
left: 250px;

background: #8DEEF2;
border: 1px solid #212121;
border-radius: 5px;

font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

`

const ImgSimul = styled.img`
    width: 360px;
    height: 132px;;
`

/*<EconomyGraph src={assets.economiagraph}/>
            <CO2Graph src={assets.co2graph}/>
            <Text1>
            Porcentagem renovável da energia gasta no mês
            </Text1>
            <Text2>
            CC, quantidade de CO2, energia que ele não poluiu
                </Text2>*/

function Simulation(simulated) {
    if (simulated)
        return (
            <div>
            <EconomyGraph src={assets.economiagraph}/>
                <CO2Graph src={assets.co2graph}/>
                <Text1>
                    Porcentagem renovável da energia gasta no mês
                </Text1>
                <Text2>
                    CC, quantidade de CO2, energia que ele não poluiu
                </Text2>
            </div>
        )
}

const Text1 = styled.div`
position: absolute;
width: 125px;
height: 37px;
left: 90px;
top: 540px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
`

const Text2 = styled.div`
position: absolute;
width: 125px;
height: 37px;
left: 245px;
top: 540px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
`

const CO2Graph = styled.img`
position: absolute;
width: 158px;
height: 127px;
left: 220px;
top: 430px;
`


const EconomyGraph = styled.img`
position: absolute;
width: 162px;
height: 135px;
left: 70px;
top: 430px;
`

const SimulateStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
height: 740px;
overflow: scroll;
background: #F5F5F5;
`;

const TopTextStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// border: solid green 1px;

width: 100%;
height: 30px;
background: #8DEEF2;

color: #212121;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 12px;

`


const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    background: #F9EDFF;

    border: 0;
    border-radius: 15px;
    height: 50px;

    outline: 0;

    select{
        font-size:   10px;
        color:  #A800FF;
        font-style: italic;
        background: #FFFFFF;
        text-indent: 10px;

        border-radius: 10px;
        border: 1px solid #A800FF;
        height: 30px;
        width: 30%;

        margin-right: 2%;

        option {
            color:  #212121;
            height: 12 px;
            font-style:  italic;
        }
    }

    input {
        font-size:   10px;
        color:  #A800FF;
        font-style: italic;
        background: #FFFFFF;
        text-indent: 10px;

        border-radius: 10px;
        border: 1px solid #A800FF;
        height: 30px;
        width: 40%;

        margin-right: 2%;
    }
`;

const MyButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;

    font-size:   10px;
    color:  #FFFFFF;
    font-weight: bold;
    background: #A800FF;

    border-radius: 10px;
    height: 30px;
`;

const EmptyCard = styled.div`
    align-items: center;
    width: 100%;
    overflow: scroll;
    height: 600px;

`;