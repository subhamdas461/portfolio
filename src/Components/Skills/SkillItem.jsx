import React from 'react'

function SkillItem(props) {
    
    return (
        <div className="skill-item">
            <p>{props.name}</p>
           
            <div className="progress">
                <div className="progressbar" style={{
                    width: props.progress+"%"
                }}></div>
            </div>    
        </div>
    )
}

export default SkillItem
