import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import ParkCard from './ParkCard';
import assets from '../constants/assets';
import { useState } from 'react';


export default function Simulate(){
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

    return(
        <SimulateStyle>
            <Header></Header>
            <TopTextStyle>
                Parque Selecionado:
            </TopTextStyle>
            <ParkCard id="01"
                        CardType='RecomendClient'
                        title='PARQUE SOLAR MRV II'
                        value1='4.2'
                        value2='125,00'
                        image={assets.park01}
                        />
            <FormCard>
            <MyInputTitle><p>Mês do Aluguel</p><div>Valor do investimento</div></MyInputTitle>
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

            </FormCard>
            {/* <EconomyGraph src={assets.economiagraph}/>
            <CO2Graph src={assets.co2graph}/>
            <Text1>
            Porcentagem renovável da energia gasta no mês
            </Text1>
            <Text2>
            CC, quantidade de CO2, energia que ele não poluiu
                </Text2> */}
            {Simulation(simulated)}
            <Footer></Footer>
            </SimulateStyle>
    );
}

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

const BoxCard = styled.div`
box-sizing: border-box;

position: absolute;
width: 160px;
height: 57px;
left: 28px;
top: 332px;

background: #A800FF;
border: 1px solid #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
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
position: absolute;
width: 180px;
height: 20px;
top: 100px;
left: 200px;
// border: solid green 1px;

font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
align: center;

`

// display: flex;
// align-items: center;
// text-align: center;
// align: center;

const FormCard = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    width: 90%;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 380px;

    margin-top: 10px;
    margin-bottom: 10px;

    outline: 0;
`;


const HistoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 60px;
    width: 100%;
    background: #F5F5F5;
`;

const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 160px;

    margin-top: 20px;
    margin-bottom: 10px;

    outline: 0;
`;

const MainTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 100%;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 40px;

    outline: 0;

    font-size:   16px;
    color:  #A800FF;
    font-weight:  bold;
    text-indent: 15px;
`;

const MeioCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    border: 0;
    border-radius: 15px;
    height: 80px;

    outline: 0;

    h3 {
        font-size:  10px;
        color:  #212121;

        border-left: 2px solid #D9D9D9;
        text-align: center;
        float: left;
        width: 33%;
        height: 40px;

        span{
            font-size:  16px;
            font-weight: bold;
        }

        :first-child{
            border-left: none;
        };
    }
`;

const TextInputCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    font-family: 'Lato', Helvetica, sans-serif;
    font-size:   16px;
    color:  #212121;
    font-weight:  bold;

    background: #F0F0F0;

    border: 0;
    border-radius: 15px;
    height: 40px;

    margin-top: 10px;
    margin-bottom: 10px;

    outline: 0;
`;


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
        width: 50%;

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

const MyInput = styled.li`
    display: flex;
    flex-direction: row;

    font-size:   12px;
    color:  #212121;

    height: 24px;

    p {
        color:  #A800FF;
        font-style: italic;
        width: 25%;
        margin-left: 10%;
    }

    div {
        text-indent: 50px;
        font-weight: bold;
    }
`;

const MyInputTitle = styled.li`
    display: flex;
    flex-direction: row;

    font-size:   12px;
    color:  #212121;

    padding-top: 10px;
    margin-bottom: 5px;

    height: 30px;

    p {
        color:  #A800FF;
        font-style: italic;
        font-weight: bold;
        width: 25%;
        margin-left: 8%;
    }

    div {
        line-height: 25px;
        text-indent: 15px;
        font-weight: bold;
    }
`;
