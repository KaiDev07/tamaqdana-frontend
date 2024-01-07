import { useProductsContext } from '../hooks/useProductsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { URL } from '../App'
import binIcon from '../images/bin.png'
import { ADMIN } from '../App'

const ProductDetails = ({ product }) => {
    const { dispatch } = useProductsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (user.email !== ADMIN) {
            return
        }

        const response = await fetch(`${URL}/products/` + product._id, {
            method: 'DELETE',
            headers: { Authorization: `bearer ${user.token}` },
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_PRODUCT', payload: json })
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
