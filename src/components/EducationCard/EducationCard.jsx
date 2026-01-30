function EducationCard({ date, badge, title, subtitle, institution, statLabel, statValue }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-date">{date}</div>
        <div className="edu-card-modern">
          {badge && (
            <div className="edu-card-header">
              <div className="edu-badge">{badge}</div>
            </div>
          )}
          <h3 className="edu-title">{title}</h3>
          <p className="edu-subtitle">{subtitle}</p>
          <div className="edu-institution">
            <span>{institution}</span>
          </div>
          <div className="edu-details">
            <div className="edu-stat">
              <span className="stat-label">{statLabel}</span>
              <span className="stat-value">{statValue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
