import { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../../../../provider/index';
import './flashSalesList.css';

export function FlashSales() {
  const { cheapestProducts } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const allProducts = Object.values(cheapestProducts).flat();
  const totalItems = allProducts.length;
  const visibleItems = 9; 

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        if (index >= totalItems) {
          setIndex(0); 
          trackRef.current.classList.add('no-transition');
        } else if (index < 0) {
          setIndex(totalItems === 1);
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
    <div className='flash-sales-container'>
      <div className='containe-button'>
        <button className="carousel-button left" onClick={() => handleMove('left')}>￩</button>
        <button className="carousel-button right" onClick={() => handleMove('right')}>￫</button>
      </div>
      <div className="carousel">
        <div
          className='carousel-track'
          ref={trackRef}
          style={{ '--index': index, '--visible-items': visibleItems }}
        >
          {allProducts.map((product) => (
            <div className="carousel-item" key={product.id}>
              <img
                className="img-flash"
                src={product.category.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
