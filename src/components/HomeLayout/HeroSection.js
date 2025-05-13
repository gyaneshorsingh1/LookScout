"use client";

import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import "./herosection.css";

export default function () {

    const [message, setMessage] = useState("");
    const [clickCount, setClickCount] = useState(0);
    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);


    const sendNotification = async () => {
    try {
        console.log('Notification Permission:', Notification.permission);

        const response = await fetch('/api/notify', { method: 'POST' });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log('Notification Data:', data); 

        if (Notification.permission === 'granted') {
            new Notification('🔔 New Message', {
                body: data.message,
                icon: '/Lookscout.png', 
            });
            setClickCount(prevCount => prevCount + 1);
        setMessage(`${data.message} (Sent ${clickCount + 1} time${clickCount === 0 ? '' : 's'})`);
         toast.success(`${data.message} (Sent ${clickCount + 1} time${clickCount === 0 ? '' : 's'})`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};



    useEffect(() => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            if (Notification.permission !== 'granted') {
                Notification.requestPermission();
            }
        }
    }, []);

     useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => {
        setMessage('');
      }, 5000); // 5000ms = 5 seconds
    }
    return () => clearTimeout(timeout); // Cleanup timeout on unmount or message change
  }, [message]);


    return (
        <>
            <div className="hero-section">
                <div className="hero-main">
                    <div className="left-hero">
                        <h2>
                            Your Supercharged <br /> Design Workflow.
                        </h2>
                        <p>
                            We’ve been told it is not possible to overachieve our customers’ <br /> expectations. We have not reinvented the wheel, we decided to build upon it.
                        </p>
                        <button onClick={sendNotification} className="notif-btn">Send Notification</button>
                        <div>
                            <p>Who supports us</p>
                            <div className="com-logos">
                                <img src="logo2.png" alt="logo" />
                                <img src="logo3.png" alt="logo" />
                                <img src="logo4.png" alt="logo" />
                                <img src="logo5.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right-hero">
                        <div className="bg-box">
                            {message && <div className="notification-message">{message}</div>}
                            <img src="hero-img.png" alt="hero img" className="hero-img" /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}