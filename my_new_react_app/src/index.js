import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
/*this is going to triger the div by the id of root and inject the entire appliaction right iside of it*/

createRoot(document.getElementById("root")).render(<App />)