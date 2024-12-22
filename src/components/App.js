<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./App.css"; // Assuming CSS is in App.css
import marked from 'marked'; // Ensure marked is installed using `npm install marked`

function App() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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


