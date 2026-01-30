function SkillGroup({ icon, title, skills }) {
  return (
    <div className="skill-group">
      <div className="skill-group-header">
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item-simple">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
