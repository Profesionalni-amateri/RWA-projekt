import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import { StateProvider } from "./components/context/StateProvider";
import { initialState } from "./components/context/initialState";
import reducer from "./components/context/reducer";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </StrictMode>,
);
