import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import BarGraph from './BarGraph';


export default function History() {

    const monthsGraph = ["J","J", "A", "S", "O", "N", "D", "J", "F", "M", "A", "M"];
    const [numbersGraph, setNumbersGraph] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [idxOnChange, setIdxOnChange] = useState(11);

    const [sumNumbers, setSumNumbers] = useState(0);

    const meanPrice = 0.60;

    let meanQuantity = sumNumbers * meanPrice;


    const dictMonthIdx = {
        "Mai, 2022": 11,
        "Abr, 2022": 10,
        "Mar, 2022": 9,
        "Fev, 2022": 8,
        "Jan, 2022": 7,
        "Dez, 2021": 6,
        "Nov, 2021": 5,
        "Out, 2021": 4,
        "Set, 2021": 3,
        "Ago, 2021": 2,
        "Jul, 2021": 1,
        "Jun, 2021": 0
    }

    const [myOption, setMyOption] = useState("Maio, 2022");

    const handleChange = (event) => {
        setMyOption(event.target.value);
        setIdxOnChange(dictMonthIdx[event.target.value]);
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
        setSumNumbers(sumNumbers + parseFloat(value));
    };

    const handleSelectMonth = (idx) =>{
        let inputs = numbersGraph;
        inputs[idx] = parseFloat(value);
        setNumbersGraph(inputs);
    }


    return (
        <HistoryStyle>
            <Header></Header>
            <MainCard>
                <MainTitle>Evolução da sua conta de luz</MainTitle>
                <BarGraph
                title=""
                width={300}
                months={monthsGraph}
                numbers={numbersGraph}
                />
            </MainCard>
            <MeioCard>
                <h3>Média de Qtd. <br></br> de Energia (kWh) <br /> <br /> <span>{meanQuantity}</span></h3>
                <h3>Média de Preço <br></br> de Energia (R$/kWh) <br /> <br /> <span>{meanPrice}</span></h3>
                <h3>Valor Total Gasto <br></br> Anualmente (R$) <br /> <br /> <span>{sumNumbers}</span></h3>
            </MeioCard>
            <TextInputCard> Seus Inputs </TextInputCard>
            <FormCard>
                <InputArea>
                    <select value={myOption} onChange={handleChange}>
                        <option value="Mai, 2022"  >Maio, 2022</option>
                        <option value="Abr, 2022"  >Abril, 2022</option>
                        <option value="Mar, 2022"  >Março, 2022</option>
                        <option value="Fev, 2022"  >Fevereiro, 2022</option>
                        <option value="Jan, 2022"  >Janeiro, 2022</option>
                        <option value="Dez, 2021"  >Dezembro, 2021</option>
                        <option value="Nov, 2021"  >Novembro, 2021</option>
                        <option value="Out, 2021"  >Outubro, 2021</option>
                        <option value="Set, 2021"  >Setembro, 2021</option>
                        <option value="Ago, 2021"  >Agosto, 2021</option>
                        <option value="Jul, 2021"  >Julho, 2021</option>
                        <option value="Jun, 2021"  >Junho, 2021</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Valor de Conta (XXX,00)"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            handleSelectMonth(idxOnChange);
                        }}
                    />
                    <MyButton onClick={addToList}> Add </MyButton>
                </InputArea>
                <ul>
                    <MyInputTitle><p>Mês da Conta</p><div>Valor da Energia</div></MyInputTitle>
                    {list.length > 0 && list.map((item, i) => <MyInput><p>{item[0]}</p><div>R$ {item[1]},00</div></MyInput>)}
                </ul>
            </FormCard>
            <Footer></Footer>
        </HistoryStyle>
    );
}

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
    margin-top: 20px;

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
            height: 12px;
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

const MyButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;

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
        text-indent: 50px;
        font-weight: bold;
    }
`;