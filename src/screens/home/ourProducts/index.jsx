import './ourProducts.css';
import { BotonArrows } from '../botonArrows';
import { useContext, useState } from 'react';
import { DataContext } from '../../../provider';
import { BotonAllProducts } from '../botonAllProducts';

export function OurProducts() {
    const { ourProducts } = useContext(DataContext);
    const [index, setIndex] = useState(0);
    const totalItems = ourProducts.length;
    const visibleItems = 3000;

    const handleMoveLeft = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const handleMoveRight = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    return (
        <div className='container-categories-wrapper'>
            <div
                className='container-our-products'
                style={{
                    transform: `translateX(-${(index * 100) / visibleItems}%)`,
                }}
            >
            <div className='botons-our-products'>
                <BotonArrows direction="left" onClick={handleMoveLeft} />
                <BotonArrows direction="right" onClick={handleMoveRight} />
            </div> 
                <div className='cuadro-our-products'></div>
                <p className='name-section'>Our Products</p>
                <h1 className='description-section'>Explore Our Products</h1>
                <div className='products-horizontal'>
                    {ourProducts.map((product) => (
                        <div
                            className='container-img-our-products' 
                            key={product._id}
                        >
                            <img 
                                className='img-our-products'
                                src={product.imagen} 
                                alt={product.titulo} 
                            />
                            <p>{product.titulo}</p>
                            <p className='price-this-mont'>$ {product.precio}</p>
                        </div>
                    ))}
                    <div className='container-boton-all'>
                        <BotonAllProducts/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
