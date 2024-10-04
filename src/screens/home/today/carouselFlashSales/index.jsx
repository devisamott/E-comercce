import { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../../../../provider/index';
import { BotonAllProducts } from '../../botonAllProducts';
import { BotonArrows } from '../../botonArrows';
import './carouseFlashSales.css';
import { WishList } from '../../../../components/wishList';
import { ViewProduct } from '../../../../components/viewProduct';
import { AddToCart } from '../../../../components/addToCart';

export function CarouselFashSales() {
  const { onSaleProducts } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const allProducts = Object.values(onSaleProducts).flat();
  const totalItems = allProducts.length;
  const visibleItems = 10;

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        if (index >= totalItems) {
          setIndex(0);
          trackRef.current.classList.add('no-transition');
        } else if (index < 0) {
          setIndex(totalItems - 1);
          trackRef.current.classList.add('no-transition');
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [index, isTransitioning, totalItems]);

  useEffect(() => {
    if (!isTransitioning) {
      trackRef.current.classList.remove('no-transition');
    }
  }, [isTransitioning]);

  const handleMove = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (direction === 'left') {
      setIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    } else {
      setIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }
  };

  return (
    <section className="flash-sales-container">
      <BotonArrows direction="left" onClick={() => handleMove('left')} />
      <BotonArrows direction="right" onClick={() => handleMove('right')} />
      
      <div className="carousel">
        <div 
          className="carousel-track"
          ref={trackRef}
          style={{ '--index': index, '--visible-items': visibleItems }}
        >
          {allProducts.map((product) => (
            <article className="carousel-item" key={product._id}>

              <article className='whisList'>
                <WishList />
              </article>

              <article className="product-image-container">
                <img className="img-flash" src={product.imagen} alt={product.titulo} />
                
                <div className="addToCart-today">
                  <AddToCart />
                </div>
              </article>

              <article className='viewProductos-today'>
                <ViewProduct/>
              </article>

              <h3 className="carousel-title">{product.titulo}</h3>
              <p className="precio">$ {product.precio}</p>
              <p className="antes">$ {product.antes}</p>

            </article>
          ))}
        </div>
      </div>
      
      <BotonAllProducts />
    </section>
  );
}