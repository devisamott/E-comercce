import { useState, useEffect } from 'react';
import './countDown.css'

export const CountDown = () => {
    const targetDate = '2024-10-15T15:00:00';
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

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
        <div>
            <div className='titles'>
                <span>Days</span>
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
            </div>
            <div className="countdown">
                {timeLeft.expired ? (
                    <span>EXPIRED</span>
                ) : (
                    <>
                        <span className='time'>{timeLeft.days.toString().padStart(2, '0')}</span>
                        <span className='points'>:</span>
                        <span className='time'>{timeLeft.hours.toString().padStart(2, '0')}</span>
                        <span className='points'>:</span>
                        <span className='time'>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        <span className='points'>:</span>
                        <span className='time'>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    </>
                )}
            </div>
        </div>
    );
};
