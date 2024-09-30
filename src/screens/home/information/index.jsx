import './information.css'

export function Information () {

    const logos = [
        {img: 'src/screens/home/imgs/facebook.svg', title: 'facebook'},
        {img: 'src/screens/home/imgs/twitter.svg', title: 'twitter'},
        {img: 'src/screens/home/imgs/instagram.svg', title: 'insta'},
        {img: 'src/screens/home/imgs/linkedin.svg', title: 'linkedin'},
    ]

    return( 
        <section className="container-information"> 
            <div className='container-children'>
                <article className='container-exclusive'>
                    <h2>Exclusive</h2>
                    <h3>Subscribe</h3>
                    <p>Get 10% of your first order</p>
                    <form className='form-information'>
                        <input type="text" placeholder="Enter your email" 
                        />
                        <button className='botton-information'>
                            <img src="src/screens/home/imgs/send.svg" alt="enviar" />
                        </button>
                    </form>
                </article>

                <article className='container-support'>
                    <h3>Support</h3>
                    <p>
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </article>

                <article className='container-account'>
                    <h3 className='title-information'>Account</h3>
                    <ul>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </article>

                <article className='container-quick'>
                    <h3 className='title-information'>Quick Link</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </article>

                <article className='container-download'>
                    <h3>Download App</h3>
                    <p>Save $3 with App New User Only</p>
                    <div className='app-download-container'>
                            <img className='qr' src="src/screens/home/imgs/qrCode.svg" alt="" />
                            <img className='google' src="src/screens/home/imgs/googleApple.png" alt="" />
                    </div>
                    <div className='social-icons'>
                        {logos.map((item, index) => (
                            <img 
                                key={index}
                                src={item.img} 
                                alt={item.title}
                                className='social-icon'
                            />
                        ))}
                    </div>

                </article>
            </div>
        </section>
    )
}
