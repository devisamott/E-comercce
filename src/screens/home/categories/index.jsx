import { useState } from 'react';
import { BotonArrows } from '../botonArrows';
import './categories.css';

export function Categories() {
    const categories = [
        { text: 'Clothes', img: 'src/screens/home/imgs/clothes.svg' },
        { text: 'Electronics', img: 'src/screens/home/imgs/devices.svg' },
        { text: 'Furniture', img: 'src/screens/home/imgs/furniture.svg' },
        { text: 'Shoes', img: 'src/screens/home/imgs/sneakers.svg' },
        { text: 'Miscellaneous', img: 'src/screens/home/imgs/miscellaneous.svg' },
        { text: 'Smartwatch', img: 'src/screens/home/imgs/smartwatch.svg' },

    ];

    const [index, setIndex] = useState(0);
    const totalItems = categories.length;
    const visibleItems = 3000;

    const handleMoveLeft = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const handleMoveRight = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    return (
        <div className="container-browse">
            <div className='botons'>
                <BotonArrows direction="left" onClick={handleMoveLeft} />
                <BotonArrows direction="right" onClick={handleMoveRight} />
            </div> 
            <div className='container-father-categories'>
                <div className="cuadro"></div>
                <p className='headrs'>Categories</p>
                <h1 className="title-category">Browse By Category</h1>
                <div
                    className='container-categoriesm'
                    style={{
                        transform: `translateX(-${(index * 100) / visibleItems}%)`,
                    }}
                >
                    {categories.map((item, index) => (
                        <div 
                            key={index}
                            className='categories'
                        >
                            <img 
                                className='img-categories'
                                src={item.img} 
                                alt={item.text}
                            />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}