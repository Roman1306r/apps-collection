import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './components/Context/Context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppProvider><App /></AppProvider>);

