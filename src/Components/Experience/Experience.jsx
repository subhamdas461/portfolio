import {MainDiv} from "../../global.styles"
import ExpList from "./ExpList";

function Experience(props){
    return(
        <div id="experience" className="exp section">
            <h1>Experience</h1>
            <MainDiv>
              <ExpList mode={props.mode}/>
           </MainDiv>
        </div>
    )
}
export default Experience;