import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgCO2 from '../imgs/graf_CO2.png';
import imgPercent from '../imgs/graf_Porcent.png';


export default function BigCardSimulate(){
    const history = useNavigate();
    return(
        <CardStyle>

            <Imgs>
            <div>
                <img src={imgPercent} alt=""/>
                <p>Porcentagem renovável da energia gasta no mês</p>
            </div>
            <div>
                <img src={imgCO2} alt=""/>
                <p>Esse é o total de gás que não será lançado na atmosfera! Parabéns!</p>
            </div>
            
            </Imgs>
            <Buttons>
                <Button1>MÁXIMA ECONOMIA</Button1>
                <Button2   onClick={() => history("/end")} >CONTRATAR</Button2>
                <Button1>SIMULAR</Button1>
            </Buttons>

        </CardStyle>
    );
}

const CardStyle = styled.div`
    width: 360px;
    height: 287px;
    display: flex;
    flex-direction: column;
    padding: 4px;
    background: #A800FF;
    border-radius: 10px;
    justify-content: space-between;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const Button1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #A800FF;
    background: #8DEEF2;
    width: 110px;
    height: 50px;
    border-radius: 25px;
    font-size: 11px;
`;
const Button2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #A800FF;
    background: #FFFFFF;
    width: 110px;
    height: 50px;
    border-radius: 25px;
    font-size: 11px;
`;

const Imgs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        img{
            width: 171px;
            height: 165px;
        }
        p{
            font-size: 13px;
            text-align: center;
        }
    }
`;