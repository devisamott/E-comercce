import { useContext, useEffect } from 'react';
import { DataContext } from '../../../provider/index';
import './slider.css';

export function Slider() {
    const { currentIndex, setCurrentIndex, shopNowProducts } = useContext(DataContext);
    
    useEffect(() => {
        if (shopNowProducts.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % shopNowProducts.length);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [shopNowProducts.length, setCurrentIndex]);
    

    if (!shopNowProducts || shopNowProducts.length === 0) {
        return <div>Loading...</div>;
    }


    const currentProduct = shopNowProducts[currentIndex];
    const imageUrl = currentProduct.imagen;

    return (
        <div className="slider">
            <img 
                src={imageUrl} 
                alt={currentProduct.titulo} 
            />
            <div className="navigation-dots">
                {shopNowProducts.map((_, index) => (
                    <span
                    key={index}
                    className={`dot ${currentIndex % shopNowProducts.length === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
                <button className='button-shop-now'>Shop Now  ⟶</button>
            </div>
        </div>
    );
}