import heart from '/src/components/wishList/heart.svg';
import './wishList.css'

export function WishList  () {
    return(
        <article className='container-favorite'>
            <div className='favorite'>
                <img className="heart" src={heart} alt=""/>
            </div>
        </article>
    )
}