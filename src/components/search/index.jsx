import search from '../search/search.svg'
import './search.css'

export function Search ( ) {
    return (  
        <form className="search-container">
            <input className='input-search' type="text" placeholder="What are you looking for?"/>
            <button type="submit" className='button-search'> 
                <img className='svgs' src={search} alt="lupa de buscar" /> 
            </button>
        </form> 
    )
}