import React from 'react';
import App from './App';
import { hydrate, render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import './css/contents.css';
import './css/service.css';
import './css/jumbo.css';
import './css/button.css';


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
registerServiceWorker();
