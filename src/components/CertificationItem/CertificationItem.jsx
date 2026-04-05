function CertificationItem({ title, previewLink, certificateLink }) {
  const normalizedLink = (previewLink || "").toLowerCase();
  const isImagePreview = /\.(png|jpe?g|gif|webp|svg)$/i.test(normalizedLink);
  const isPdfPreview = normalizedLink.endsWith(".pdf");
  const pdfPreviewSrc = isPdfPreview
    ? `${previewLink}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`
    : "";

  return (
    <div className="cert-item">
      <div className="cert-header">
        <h4>{title}</h4>
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-top-link"
            title="Open Certificate"
            aria-label={`Open ${title}`}
          >
            <i className="fa fa-link" aria-hidden="true"></i>
          </a>
        )}
      </div>

      {previewLink && (
        <div className="cert-preview-wrap" title={`${title} preview`}>
          {isImagePreview && (
            <img src={previewLink} alt={`${title} preview`} className="cert-preview-image" loading="lazy" />
          )}

          {isPdfPreview && (
            <div className="cert-preview-pdf-shell" aria-label={`${title} preview`}>
              <iframe
                src={pdfPreviewSrc}
                title={`${title} preview`}
                className="cert-preview-pdf"
                loading="lazy"
              />
            </div>
          )}

          {!isImagePreview && !isPdfPreview && (
            <div className="cert-preview-fallback">
              <i className="far fa-file-alt" aria-hidden="true"></i>
              <span>Preview not supported</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CertificationItem;
