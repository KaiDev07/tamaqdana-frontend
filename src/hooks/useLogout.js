import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useProductsContext } from './useProductsContext'
import api from '../http/api'

export const useLogout = () => {
    const [isLoading3, setIsLoading3] = useState(false)
    const { dispatch } = useAuthContext()
    const { dispatch: productsDispatch } = useProductsContext()

    const logout = async () => {
        try {
            setIsLoading3(true)
            const response = await api.post('/user/logout')
            console.log(response)
            setIsLoading3(false)
            localStorage.removeItem('token')
            dispatch({ type: 'LOGOUT' })
            productsDispatch({ type: 'SET_PRODUCTS', payload: null })
        } catch (error) {
            console.log(error.response)
        }
    }

    return { isLoading3, logout }
}
