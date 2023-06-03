import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './style.css'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)