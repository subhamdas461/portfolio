

function SkillItem(props) {
 
 
  return (
    <div 
        className="skill-item"
       
        
    >
      <p>{props.name}</p>

      <div className="progress">
        <div
          className="progressbar"
          style={{
            width: props.progress + "%",
          }}
        >
          <span className="pg-percent">{props.progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
