import './ourProducts.css';
import { BotonArrows } from '../botonArrows';
import { useContext, useState } from 'react';
import { DataContext } from '../../../provider';
import { BotonAllProducts } from '../botonAllProducts';
import { WishList } from '../../../components/wishList';
import { ViewProduct } from '../../../components/viewProduct';
import { AddToCart } from '../../../components/addToCart';

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
        <section className='container-categories-wrapper'>
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
                <article className='cuadro-our-products'></article>
                <p className='name-section'>Our Products</p>
                <h1 className='description-section'>Explore Our Products</h1>
                <div className='products-horizontal'>
                    {ourProducts.map((product) => (
                        <div
                            className='container-img-our-products' 
                            key={product._id}
                        >

                            <article className='whistList2'>
                                <WishList/>
                            </article>

                            <article className='container-ourProducts'>
                                <img 
                                    className='img-our-products'
                                    src={product.imagen} 
                                    alt={product.titulo} 
                                />

                                <article className='addToCart2'>
                                    <AddToCart/>
                                </article>

                            </article>

                            <article className='viewProductos2'>
                                <ViewProduct/>
                            </article>

                            <p>{product.titulo}</p>
                            <p className='price-this-mont'>$ {product.precio}</p>
                        </div>
                    ))}
                    
                    <div className='container-boton-all'>
                        <BotonAllProducts/>
                    </div>

                </div>
                
            </div>
        </section>
    );
}
