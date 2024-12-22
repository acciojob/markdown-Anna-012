// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <textarea
        className="textarea"
        placeholder="Enter your markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

     
      
