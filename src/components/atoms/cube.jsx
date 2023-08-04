import React, { useEffect, useState } from 'react';
import "./cube.scss";
import { useScroll, animated } from '@react-spring/web'

const Cube = () => {
    const [ scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // const degreeValue = scrollProgress * 360;

    return( 
        <animated.div delay="2000" id="cube" className={scrollY == 0 ? "zero" : scrollY >= 260 ? "hideface" : null} tabIndex="0" style={{
                "--scroll-distance": scrollProgress
            }}>
            <div className="face front"></div> 
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </animated.div>
    )
}

export default Cube