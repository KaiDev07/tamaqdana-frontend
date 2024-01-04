import './App.css'
import Home from './pages/Home'

export const URL = process.env.REACT_APP_SERVER_URL

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    )
}

export default App
