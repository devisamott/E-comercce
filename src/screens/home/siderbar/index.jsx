import './sidebar.css'
import arrow from './arrow.svg'

export function Sidebar () {
    return (
        <ul className='sidebar-content'>
            <li>Woman´s Fashion <img className='arrow' src={arrow} alt=""/> </li>
            <li>Men´s Fashion  <img className='arrow1' src={arrow} alt=""/></li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports % Outdoor</li>
            <li>Baby´s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li> 
        </ul>
    )
}