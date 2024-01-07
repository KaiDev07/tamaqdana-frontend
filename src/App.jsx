import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import Products from './pages/Products'
import Admin from './pages/Admin'

export const URL = process.env.REACT_APP_SERVER_URL
export const ADMIN = process.env.REACT_APP_ADMIN

function App() {
    const { user } = useAuthContext()

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/products"
                        element={user ? <Products /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/admin"
                        element={
                            user?.email === ADMIN ? (
                                <Admin />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
