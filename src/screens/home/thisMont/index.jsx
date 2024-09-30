import { useContext } from 'react';
import { DataContext } from '../../../provider';
import './thisMont.css';

export function ThisMont () {
  const { thisMonth: thisMont = [] } = useContext(DataContext);
  
   return (
    <div className="container-this-mont">
        <div className="cuadro-this-mont"></div>
        <p className="header-this-mont">This Mont</p>
        <h1 className="title-this-mont">Best Selling Products</h1>
        <div className='container-boton-this-mont'>
            <button className='boton-this-mont'>View All</button>
        </div>
        <div className="product-list">
          {thisMont && thisMont.length > 0 ? (
            thisMont.map((product) => (
              <div className="conteiner-products-this-mont" key={product._id}>
                <img
                  className="img-flash"
                  src={product.imagen}
                  alt={product.titulo}
                />
                <h3>{product.titulo}</h3>
                <p className="price-this-mont">${product.precio}</p>
                <p className='before'>${product.antes}</p>
              </div>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
    </div>
  );
}
