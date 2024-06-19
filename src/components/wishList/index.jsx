import heart from '../wishList/heart.svg';
import './wishList.css'

export function WishList  () {
    return(
        <div className='favorite'>
            <img className="heart" src={heart} alt=""/>
        </div>

    ) 
}