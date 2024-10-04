import eye from '/home/milano/Escritorio/Proyectos/e-comercce/src/components/viewProduct/eye.svg';
import './viewProduct.css'

export function ViewProduct () {
    return (
        <article className='container-view'>
            <div className='view'>
                <img className='eye' src={eye} alt="eye" />
            </div>
        </article>
    )
} 