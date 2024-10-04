import { WishList } from '../wishList';
import { Search } from '../search';
import { ShoppingCart } from '../shoppingCart/index.';
import './headBoard.css';

export function HeadBoard() {
    return (
        <div className='container'>
            <h2 className='exclusive'>Exclusive</h2>
            <div className='menu'>
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Sign up</p>
            </div>
            <section className='section-head'>
                <Search/>
                <WishList/>
                <ShoppingCart/>
            </section>
        </div>
    );
}
