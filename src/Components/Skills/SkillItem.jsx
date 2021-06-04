import {useEffect} from 'react'

function SkillItem(props) {
    useEffect(() => {
        const perc = document.querySelector(".progressbar before ")
        console.log(perc);
    }, [])
    return (
        <div className="skill-item">
            <p>{props.name}</p>
           
            <div className="progress">
                <div className="progressbar" style={{
                    width: props.progress+"%"
                }}>
                    <span className="pg-percent">{props.progress}%</span>
                </div>
            </div>    
        </div>
    )
}

export default SkillItem
