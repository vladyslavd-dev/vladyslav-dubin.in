import { useEffect, useState } from "react";

export const useCookieConsent = () => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent === "accepted") {
            setIsVisible(false);
        }
    }, []);

    const accept = () => {
        setIsAccepted(true);
        localStorage.setItem("cookieConsent", "accepted");

        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
    };

    return { isAccepted, isVisible, accept };
};
