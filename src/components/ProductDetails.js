import { useProductsContext } from '../hooks/useProductsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { URL, ADMIN } from '../App'
import binIcon from '../images/bin.png'
import api from '../http/api'

const ProductDetails = ({ product }) => {
    const { dispatch } = useProductsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        try {
            if (user.email !== ADMIN) {
                return
            }

            const response = await api.delete(`${URL}/products/` + product._id)

            dispatch({ type: 'DELETE_PRODUCT', payload: response.data })
        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    return (
        <div className="product-details">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            {user.email === ADMIN ? (
                <span onClick={handleClick}>
                    <img src={binIcon} alt="delete" />
                </span>
            ) : null}
        </div>
    )
}

export default ProductDetails
