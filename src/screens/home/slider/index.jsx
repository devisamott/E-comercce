import { useContext } from 'react';
import { DataContext } from '../../../provider/index';
import './slider.css';

export function Slider() {
    const { currentIndex, setCurrentIndex, firstProducts } = useContext(DataContext);


    if (!firstProducts || firstProducts.length === 0) {
        return <div>Loading...</div>;
    }

    const currentProduct = firstProducts[currentIndex];
    const imageUrl = currentProduct.category.image

    return (
        <div className="slider">
            <img 
                src={imageUrl} 
                alt={currentProduct.title} 
            />
            <div className="navigation-dots">
                {firstProducts.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex % firstProducts.length === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
