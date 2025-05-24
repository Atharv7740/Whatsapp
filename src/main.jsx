import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import ThemeWrapper from './context/ThemeChanger/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ThemeWrapper>
        <App/>
    </ThemeWrapper>
    </BrowserRouter>
)

