function AchievementCard({ title, position, description, meta }) {
  return (
    <div className="achievement-card">
      <div className="achievement-header">
        <h4>{title}</h4>
        <span className="achievement-position">{position}</span>
      </div>
      <p className="achievement-desc">{description}</p>
      {meta && (
        <div className="achievement-meta">
          {meta.map((item, index) => (
            <span key={index} className="meta-item">
              <i className={item.icon}></i> {item.text}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AchievementCard;
