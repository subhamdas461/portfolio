import styled from "styled-components"

const globalValues = {
    fontSmall : 12,
    fontBig : 18,
    fontFam : "montserrat"
}

export const BigPara = styled.p`
    color: #fff;
    font-size: ${globalValues.fontSmall};
    font-family: "${globalValues.fontFam}",sans-serif;
    padding: 10px 0;
    margin: auto;
    width: 90%;
    max-width: 1000px;
    margin-top: ${prop => prop.top}px;
`