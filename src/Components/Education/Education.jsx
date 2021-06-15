import EduList from "./EduList"
import {MainDiv} from "../../global.styles"


function Education(props){
    return(
        <div id="education" className="education section">
            <h1>Education</h1>
           <MainDiv>
              <EduList mode={props.mode}/>
           </MainDiv>
        </div>
    )
}
export default Education