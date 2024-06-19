import cart from '../shoppingCart/cart.svg'
import './shoppingCart.css'

export function ShoppingCart () {
    return(
        <img className='svg-cart' src={cart} alt="" />
    )
}