import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*// If we open CodeSandbox, the sandpack Tailwind won't be included so this can inject it
const tw = document.createElement("script");
tw.setAttribute("src", "https://cdn.tailwindcss.com");
tw.setAttribute("type", "text/javascript");
document.body.appendChild(tw);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
