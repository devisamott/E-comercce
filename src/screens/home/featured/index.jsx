import './featured.css'
import { DataContext } from '../../../provider'
import { useContext } from 'react'

export function Featured() {
    const { featured } = useContext(DataContext)

    return (
        <div className='container-featured'>
            <div className='box-featured'></div>
            <p className='name-section-featured'>Featured</p>
            <h1 className='title-section-featured'>New Arrival</h1>
            <div className='grid-featured'>
                <div
                    className="item" 
                >
                    {featured.map((product, index) => (
                        <div 
                            key={index + 1} 
                            className={`item${index + 1}`}
                        >
                                <img 
                                    src={product.imagen}
                                    alt="Category" 
                                    className='img'
                                />
                                <div className='container-description'>
                                    <p className={`product-title title${index + 1}`}>{product.titulo}</p>
                                    <p className={`product-description descrip${index + 1}`}>{product.descripcion}</p>
                                    <button className={`boton-shop-now boton${index + 1}`}>Shop Now</button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
