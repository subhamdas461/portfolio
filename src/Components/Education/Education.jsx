import EduList from "./EduList"
import styled from "styled-components";

const MainDiv = styled.div`
    margin-top: 120px;
    display: flex;
    
    flex-direction: column;
  
`
function Education(){
    return(
        <div id="education" className="education section">
            <h1>Education</h1>
           <MainDiv>
              <EduList/>
           </MainDiv>
        </div>
    )
}
export default Education