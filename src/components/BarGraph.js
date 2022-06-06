import styled from 'styled-components';

export default function BarGraph(props){
    const widthInput = parseFloat(props.width);

    const widthBar = widthInput;
    const heightBar = widthBar*200/350;
    const title = props.title
    const months = props.months;
    const inputs = props.numbers;
    

    let sumInputs = 0
    let maxInput = inputs[0]
    for(let i = 0; i< inputs.length; i++){
        if(inputs[i] > maxInput){
            maxInput = inputs[i];
        }
        sumInputs += inputs[i];
    }
    let barHeights = [];
    for(let i =0; i < inputs.length; i++){
        const newHeight = inputs[i]/maxInput*heightBar*0.68;
        barHeights = [...barHeights, newHeight];
    }


    return(
        <BarGraphStyle width={widthBar} height={heightBar}>
            <h1>{title}</h1>
            <GraphStyle width={widthBar} height={heightBar}>
                {barHeights.map( (barHeight, idx) =>{
                    const barWidth = widthBar * 0.5 / inputs.length;
                    return(
                        <BarData
                        key={idx}
                        height={barHeight}
                        width={barWidth}
                        />
                    );
                } )}
            </GraphStyle>
            <MonnthsList>
                {months.map( month => <p>{month}</p> )}
            </MonnthsList>
            
        </BarGraphStyle>

    );
}

const BarGraphStyle = styled.div`
    width:  ${props => props.width+`px`};
    height: ${ props => props.height+`px`};
    display: flex;
    flex-direction: column;
    padding: ${ props => props.width*0.01+'px'};
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
    h1{
        margin-left: 5px;
        margin-bottom: 15px;
        font-weight: bold;
        color: #A800FF;
    }
`;

const GraphStyle = styled.div`
    width: 100%;
    height: ${ props => props.height*0.70 +'px' };
    border-left: 1px solid #000000;
    border-bottom: 1px solid #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding-left: 2%;
    padding-right: 2%;
`;

const MonnthsList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2%;
    padding-right: 2%;
    p{
        font-weight: bold;
    }
`;

const BarData = styled.div`
    background: #8DEEF2;
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
`;