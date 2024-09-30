import { useEffect, useState } from "react";
import { GetProductBuyNow } from '../../../../src/api/getDataFromApi/index';
import "./buyNow.css";

export function BuyNow () {
    const [buyNows, setBuyNow] = useState([]);
    const targetDate = '2024-10-15T17:40:00';
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    useEffect(() => {
        dataBuyNow();
    }, []);
    
    const dataBuyNow = async () => {
        const result = await GetProductBuyNow();
        setBuyNow(result);
    };

    function calculateTimeLeft(date) {
        const difference = new Date(date) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        } else {
            timeLeft = { expired: true };
        }

        return timeLeft;
    }

    return (
        <div className="container-buy-now">
            <p className="category-buy-now">Category</p>
            <h1 className="title-buy-now">
                <span className="first-line">Enhance Your</span>
                <span className="second-line">Music Experience</span>
            </h1>
            <ul>
                {buyNows.map((buyNow) => (
                    <li key={buyNow.id}>
                        <img 
                            className="img-buy-now"
                            src={buyNow.images}
                            alt={`Product ${buyNow.id}`}
                        />
                    </li>
                ))}
            </ul>
            <div className="timer">
                {timeLeft.expired ? (
                    <span>EXPIRED</span>
                ) : (
                    <>
                        <div className="time-segment">
                            <div className="time">{timeLeft.hours.toString().padStart(2, '0')}</div>
                            <div className="label">Hours</div>
                        </div>
                        <div className="time-segment">
                            <div className="time">{timeLeft.days.toString().padStart(2, '0')}</div>
                            <div className="label">Days</div>
                        </div>
                        <div className="time-segment">
                            <div className="time">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            <div className="label">Minutes</div>
                        </div>
                        <div className="time-segment">
                            <div className="time">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            <div className="label">Seconds</div>
                        </div>
                    </>
                )}
            </div>
            <div>
                <button className="button-buy-now">Buy Now</button>
            </div>
        </div>
    );
}
