import styled from 'styled-components';

export default function BarGraph(){
    const sizeBar = 200;
    const title = "Título 1"
    const months = [ "J", "F", "M", "A", "M", "J", "J" ]

    return(
        <BarGraphStyle size={sizeBar}>
            <h1>{title}</h1>
            <GraphStyle size={sizeBar}>

            </GraphStyle>
            
        </BarGraphStyle>

    );
}

const BarGraphStyle = styled.div`
    width:  ${props => props.size+`px`};
    height: ${ props => props.size+`px`};
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding: ${ props => props.size*0.05+'px'};
    justify-content: space-between;
    h1{
        font-weight: bold;
        color: #A800FF;
    }
`;

const GraphStyle = styled.div`
    width: 100%;
    height: ${ props => props.size*0.70 +'px' };
    border-left: 1px solid #000000;
    border-bottom: 1px solid #000000;
    
`;