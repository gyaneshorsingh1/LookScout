"use client";

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Set the initial window width when the component mounts
        setWidth(window.innerWidth);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

export default useWindowWidth;
