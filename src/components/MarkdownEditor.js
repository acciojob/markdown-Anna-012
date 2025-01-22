import React from 'react';

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      className="textarea"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Write your markdown here..."
    />
  );
};

export default MarkdownEditor;
