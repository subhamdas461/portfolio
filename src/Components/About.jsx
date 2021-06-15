import { BigPara, FlexContainer } from "../global.styles";

import styled from "styled-components";
import ImageSrc from "../images/background-attach.jpg";
const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: 10px;
  flex: ${(props) => props.flex};
  object-fit: cover;
  border-radius: 5px;
  background-color: var(--dark-sidebar-bg);
`;

function About() {
  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <FlexContainer top="100px">
        <BigPara 
            margin="10px" 
            flex="1 1 250px"
            lineHeight="25px"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          dolorum ex consequuntur animi eaque dignissimos, cupiditate quod
          repellat necessitatibus ab unde illum asperiores corporis placeat
          nostrum corrupti magni a nulla natus possimus molestias facilis quam
          excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique
          praesentium quam, voluptatum ipsum eligendi eum incidunt omnis quod
          doloremque repellat voluptas similique distinctio asperiores? Placeat.
        </BigPara>
        <Image src={ImageSrc} flex="1 1 250px" />
      </FlexContainer>
    </div>
  );
}
export default About;
