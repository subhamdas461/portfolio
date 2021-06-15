import styled from "styled-components"


const globalValues = {
    fontSmall : 12,
    fontBig : 18,
    fontFam : "montserrat",
   
}

export const BigPara = styled.p`
    color: #fff;
    line-height: ${props=> props.lineHeight};
    font-size: ${props=>props.fsize};
    font-family: "${globalValues.fontFam}",sans-serif;
    margin:${props=>props.margin};
    width: ${props=> props.width};
    /* min-width: 300px; */
    max-width: 1000px;
    flex: ${props => props.flex};
    margin-top: ${prop => prop.top};
    
`
export const EduContainer = styled.div`

  text-align: center;
  color: #fff;
  width: 90%;
  display: flex;
  position: relative;
  margin: ${props=>props.margin};
  max-width: 1000px;
`;
export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(90% + 20px);
    margin: ${props=>props.top} auto auto;
    flex-wrap: wrap;
    max-width: 1000px; 
`
