import styled from 'styled-components'

import React from 'react'

const ParkCard = (props) => {
  return (
    <CardWrapper>
      <CardBottom></CardBottom>
      <CardTop></CardTop>
      <CardTitle>{props.title}</CardTitle>
      <CardType>{props.type}</CardType>
      <CardImage src={props.image}></CardImage>
      <CardStat1>{props.stat1}</CardStat1>
      <CardStat2>{props.stat2}</CardStat2>
      <CardValue1>{props.value1} kWh</CardValue1>
      <CardValue2>R$ {props.value2}</CardValue2>
      <VerticalLine></VerticalLine>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 105px;
`

const CardTop = styled.div`
  background-color: white;
  width: 350px;
  height: 100px;
  border-radius: 15px;
  z-index: 1;
`


const CardBottom = styled.div`
  position: absolute;
  width: 350px;
  height: 100px;
  border-radius: 15px;
  top: 5px;
  z-index: -1;
  background-color: black;
`

const CardType = styled.div`
height: 20px;
position: absolute;
left: 160px;
top: 0px;
font-family: Lato, Helvetica, sans-serif
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center
`

const CardTitle = styled.div `
position: absolute;
top: 14px;
left: 150px;
height: 30px;
font-family: Lato, Helvetica, sans-serif
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
font-family: Lato, Helvetica, sans-serif
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
clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%)
`


const CardStat1 = styled.div`
position: absolute;
top: 46px;
width: 100px;
left: 140px;
height: 20px;
font-family: Lato, Helvetica, sans-serif
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
display: inline-block;
`

  const CardValue1 = styled.div`
  font-family: Lato, Helvetica, sans-serif
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
  font-family: Lato, Helvetica, sans-serif
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
  font-family: Lato, Helvetica, sans-serif
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

export default ParkCard
