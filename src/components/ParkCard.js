import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ParkCard = (props) => {
  const CardType = props.CardType;
  const history = useNavigate();

  if (CardType == 'RecomendClient') {
    return (
      <CardWrapper onClick={() => history("/park")}>
        <CardBottom1></CardBottom1>
        <CardTop></CardTop>
        <CardTitle>{props.title}</CardTitle>
        <CardClick1>NOSSA RECOMENDAÇÃO</CardClick1>
        <CardImage src={props.image}></CardImage>
        <CardStat1>Energia Produzida</CardStat1>
        <CardStat2>Valor da Cota</CardStat2>
        <CardValue1>{props.value1} kWh</CardValue1>
        <CardValue2>R$ {props.value2}</CardValue2>
        <VerticalLine></VerticalLine>
      </CardWrapper>
    )
  }
  if (CardType == 'RecomendPublic') {
    return (
      <CardWrapper onClick={() => history("/park")}>
        <CardBottom2></CardBottom2>
        <CardTop></CardTop>
        <CardTitle>{props.title}</CardTitle>
        <CardClick2>PARQUE SOLAR EM ALTA</CardClick2>
        <CardImage src={props.image}></CardImage>
        <CardStat1>Energia Produzida</CardStat1>
        <CardStat2>Valor da Cota</CardStat2>
        <CardValue1>{props.value1} kWh</CardValue1>
        <CardValue2>R$ {props.value2}</CardValue2>
        <VerticalLine></VerticalLine>
      </CardWrapper>
    )
  }
  if (CardType == 'Simple') {
    return (
      <CardWrapper onClick={() => history("/park")}>
        <CardBottom3></CardBottom3>
        <CardTop></CardTop>
        <CardTitle>{props.title}</CardTitle>
        <CardImage src={props.image}></CardImage>
        <CardStat1>Energia Produzida</CardStat1>
        <CardStat2>Valor da Cota</CardStat2>
        <CardValue1>{props.value1} kWh</CardValue1>
        <CardValue2>R$ {props.value2}</CardValue2>
        <VerticalLine></VerticalLine>
      </CardWrapper>
    )
  }

  if (CardType == 'Special') {
    return (
      <CardWrapper onClick={() => history("/park")}>
        <CardBottom3></CardBottom3>
        <CardTop></CardTop>
        <CardTitle>{props.title}</CardTitle>
        <CardClick3>INFORMATIVO</CardClick3>
        <CardImage src={props.image}></CardImage>
        <CardStat>{props.stat1}</CardStat>
      </CardWrapper>
    )
  }

}

const CardWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 105px;
  margin-bottom: 15px;
`

const CardTop = styled.div`
  background-color: white;
  width: 350px;
  height: 100px;
  border-radius: 15px;
  z-index: 1;
`


const CardBottom1 = styled.div`
  position: absolute;
  width: 350px;
  height: 100px;
  border-radius: 15px;
  top: 5px;
  z-index: -1;
  background-color: #A800FF;
  
`
const CardBottom2 = styled.div`
  position: absolute;
  width: 350px;
  height: 100px;
  border-radius: 15px;
  top: 5px;
  z-index: -1;
  background-color: #8DEEF2;
  
`
const CardBottom3 = styled.div`
  position: absolute;
  width: 350px;
  height: 100px;
  border-radius: 15px;
  top: 5px;
  z-index: -1;
  background-color: black;
  
`



const CardClick1 = styled.div`
  height: 20px;
  position: absolute;
  left: 160px;
  top: 0px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #A800FF;
  line-height: 12px;
  display: flex;
  align-items: center;
`
const CardClick2 = styled.div`
  height: 20px;
  position: absolute;
  left: 160px;
  top: 0px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #8DEEF2;
  line-height: 12px;
  display: flex;
  align-items: center;
`

const CardClick3 = styled.div`
  height: 20px;
  position: absolute;
  left: 160px;
  top: 0px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: black;
  line-height: 12px;
  display: flex;
  align-items: center;
`

const CardTitle = styled.div`
  position: absolute;
  top: 14px;
  left: 150px;
  height: 30px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
`

const CardText = styled.div`
  position: absolute;
  left: 140px;
  top: 47px;
  width: 200px;
  height: 40px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
`

const CardImage = styled.img`
  top: 0;
  position: absolute;
  height: 100px;
  width: 142.5px;
  border-radius: 15px 0 0 15px;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
`
const CardStat1 = styled.div`
  position: absolute;
  top: 46px;
  width: 100px;
  left: 140px;
  height: 20px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400px;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
`

const CardStat = styled.div`
  position: absolute;
  top: 46px;
  width: 200px;
  left: 140px;
  height: 20px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400px;
  font-size: 9px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
  font-style: italic;
`

const CardValue1 = styled.div`
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  left: 140px;
  top: 66px;
  position: absolute;
  width: 100px;
  height: 25px;
  display: inline-block;
`

const CardStat2 = styled.div`
  position: absolute;
  top: 46px;
  width: 100px;
  left: 240px;
  height: 20px;
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  display: inline-block;
`


const CardValue2 = styled.div`
  font-family: 'Lato', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  left: 240px;
  top: 66px;
  position: absolute;
  width: 100px;
  height: 25px;
  display: inline-block;
`

const VerticalLine = styled.div`
  position: absolute;
  width: 0px;
  height: 40px;
  left: 240px;
  top: 45px;
  border-left: 1px solid #D9D9D9;
`

export default ParkCard;
