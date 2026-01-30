function CertificationItem({ title, description, certificateLink }) {
  return (
    <div className="cert-item">
      <h4>
        {title}
        {certificateLink && (
          <a 
            href={certificateLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-link"
            title="View Certificate"
          >
            <i class="fa fa-link" aria-hidden="true"></i>
          </a>
        )}
      </h4>
      <p>{description}</p>
    </div>
  );
}

export default CertificationItem;
