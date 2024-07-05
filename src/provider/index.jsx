import { createContext, useState, useEffect } from 'react';
import { GetProducts } from '../../src/api/getDataFromApi';

export const DataContext = createContext();

export function Provider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagenes, setImages] = useState([]);
    const [cheapestProducts, setCheapestProducts] = useState({});

    useEffect(() => {
        dataProduct();
    }, []);
    
    const dataProduct = async () => {
        const result = await GetProducts();
        setImages(result);
        setCheapestProducts(getCheapestProductsPerCategory(result));
    };
    
    const groupProductsByCategory = (products) => {
        if (!Array.isArray(products)) {
            return {};
        }
        const categoryMap = {};
        products.forEach((product) => {
            const categoryId = product.category.id;
            if (!categoryMap[categoryId]) {
                categoryMap[categoryId] = [];
            }
            categoryMap[categoryId].push(product);
        });
        return categoryMap;
    };

    const getFirstProductPerCategory = (products) => {
        const categoryMap = groupProductsByCategory(products);
        return Object.values(categoryMap).map(productsInCategory => productsInCategory[0]);
    };

    const getCheapestProductsPerCategory = (products) => {
        const categoryMap = groupProductsByCategory(products);
        Object.keys(categoryMap).forEach((categoryId) => {
            categoryMap[categoryId].sort((a, b) => a.price - b.price);
            categoryMap[categoryId] = categoryMap[categoryId].slice(0, 2);
        });
        return categoryMap;
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
        <DataContext.Provider value={{ 
            currentIndex,
            setCurrentIndex,
            firstProducts,
            cheapestProducts 
         }}>
            {children}
        </DataContext.Provider>
    );
}
