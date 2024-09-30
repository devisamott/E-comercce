import './services.css'

export function Services () {
    const services = [
        {img: 'src/screens/home/imgs/delivery.svg', text: "FREE AND FAST DELIVERY", descrip: "Free delivery for all orders over $140" },
        {img: 'src/screens/home/imgs/customer.svg', text: "24/7 CUSTOMER SERVICE", descrip: "Friendly 24/7 customer support"},
        {img: 'src/screens/home/imgs/secure.svg', text: "MONEY BACK GUARANTEE", descrip: "We reurn money within 30 days"}
    ];

    return (
        <div className="services-wrapper">
            {services.map((item, index) => (
                <div
                    key={index}
                    className="services"
                >
                    <div className="container-services">
                        <div className="inner-circle">
                            <img 
                                src={item.img} 
                                alt="service"
                                className='imgs-services'
                            />
                        </div>
                    </div>
                    <div className='container-text'>
                        <p className='service-text'>{item.text}</p>
                        <p className='service-descrip'>{item.descrip}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}