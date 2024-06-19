import { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const DataContext = createContext();

// Crear el proveedor
export function Provider({ children }) {
    const images = [
        'src/screens/home/slider/imgs/bannerReloj.jpg',
        'src/screens/home/slider/imgs/bannerReloj2.jpg',
        'src/screens/home/slider/imgs/bannerTv.jpg',
        'src/screens/home/slider/imgs/bannerXbox.jpg'
    ];
    const interval = 3000;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const next = (currentIndex + 1) % images.length;
        const id = setTimeout(() => setCurrentIndex(next), interval);
        return () => clearTimeout(id);
    }, [currentIndex, images.length, interval]);

    return (
        <DataContext.Provider value={{ currentIndex, setCurrentIndex, images }}>
            {children}
        </DataContext.Provider>
    );
}
