import Arrow from '../assets/up-arrow.png'
import ScrollToTop from "react-scroll-to-top";
import React, { useState, useEffect } from 'react';

function topScroll() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='bg-third duration-300 w-max rounded-xl fixed right-5 cursor-pointer bottom-5'>
            {" "}
            {showTopBtn && (
                <img src={Arrow} className='h-10 animate-xxx ' onClick={goToTop}/>
            )}{" "}
        </div>
    )
}

export default topScroll;