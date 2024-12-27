import React, { useState, useEffect } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';
import "../styles/App.css"

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    // Simple markdown to HTML conversion
    const convertedHtml = markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>') // Headers
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>') // Bold
      .replace(/\*(.*)\*/gim, '<em>$1</em>') // Italics
      .replace(/\n/gim, '<br/>') // Line breaks
      .replace(/\n\n/gim, '<p></p>'); // Paragraphs
    
    setHtml(convertedHtml);
  }, [markdown]);

  return (
    <div className="app">
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      <MarkdownPreview html={html} />
    </div>
  );
};

export default App;
