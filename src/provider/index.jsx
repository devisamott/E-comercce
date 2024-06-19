import { createContext, useState, useEffect } from 'react';
import { GetProducts } from '../../src/api/getDataFromApi';

export const DataContext = createContext();

export function Provider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagenes, setImages] = useState([]);

    useEffect(() => {
        dataProduct();
    }, []);
    
    const dataProduct = async () => {
            const result = await GetProducts();
            setImages(result);
    };
    
    const getFirstProductPerCategory = (products) => {
        if (!Array.isArray(products)) {
            console.error('Expected an array but received:', products);
            return [];
        }
        const categoryMap = new Map();
        products.forEach((product) => {
            if (!categoryMap.has(product.category.id)) {
                categoryMap.set(product.category.id, product);
            }
        });
        return Array.from(categoryMap.values());
    };

    const firstProducts = getFirstProductPerCategory(imagenes);

    useEffect(() => {
        if (firstProducts.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % firstProducts.length);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [firstProducts.length]);

    return (
        <DataContext.Provider value={{ currentIndex, setCurrentIndex, firstProducts }}>
            {children}
        </DataContext.Provider>
    );
}
