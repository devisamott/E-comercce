import { useContext } from 'react';
import { DataContext } from '../../../provider';
import './thisMont.css';
import { WishList } from '../../../components/wishList';
import { ViewProduct } from '../../../components/viewProduct';
import { AddToCart } from '../../../components/addToCart';

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
          {thisMont.map((product) => (
              <div className="conteiner-products-this-mont" key={product._id}>

                <article className='whistList2'>
                  <WishList/>
                </article>

                <article className='container-product-image'>
                  <img
                    className="img-flash"
                    src={product.imagen}
                    alt={product.titulo}
                  />

                  <article className='addToCart2'>
                    <AddToCart/>
                  </article>
                </article>

                <article className='viewProductos2'>
                  <ViewProduct/>
                </article>

                <h3>{product.titulo}</h3>
                <p className="price-this-mont">${product.precio}</p>
                <p className='before'>${product.antes}</p>
              </div>
          ))}
        </div>
    </div>
  );
}
