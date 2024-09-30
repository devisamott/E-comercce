/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { GetProducts } from '../../src/api/getDataFromApi/index';

export const DataContext = createContext();

export function Provider({ children }) {    
    const [ourProducts, setOurProducts] = useState([]);
    const [onSaleProducts, setOnSaleProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shopNowProducts, setShopNowProducts] = useState([]);
    const [thisMonth, setThisMonth] = useState([]);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        dataProduct();
    }, []);
    
    const dataProduct = async () => {
        const result = await GetProducts();
        setFeatured(getFeatured(result));
        setOurProducts(getOurProducts(result));
        setShopNowProducts(getShopNowProducts(result));
        setOnSaleProducts(getOnSaleProducts(result));
        setThisMonth(getThisMonth(result));
    }

    const getShopNowProducts = (products) => {
        return products.filter(product => {
            return product.categoria && product.categoria._id === "66e8a81d82582911ebfd9094"; 
        });
    }

    const getOnSaleProducts = (products) => {
        return products.filter(product => product.enDescuento)
    }

    const getThisMonth = (products) => {
        return products.filter(product => {
            return product.categoria && product.categoria._id === "66ed89e8b0a30a2249773fac"
            
        })
    }

    const getOurProducts = (products) => {
        return products.filter(product => {
            return product.categoria && product.categoria._id === "66ed9f42b0a30a2249773ff9"
        })
    }

    const getFeatured = (products) => {
        return products.filter(product => {
            return product.categoria && product.categoria._id === "66f16e748b2101647cdc518f"

        })
    }

    
    return (
        <DataContext.Provider value={{ 
            currentIndex,
            setCurrentIndex,
            onSaleProducts,
            shopNowProducts,
            thisMonth,
            ourProducts,
            featured,
        }}>
            {children}
        </DataContext.Provider>
    );
}
