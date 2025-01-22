import React from 'react';

const MarkdownPreview = ({ html }) => {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkdownPreview;
