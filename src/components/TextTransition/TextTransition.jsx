import { useEffect, useRef, useState } from "react";
import classes from "./TextTransition.module.scss";

import { splitText } from './TextTransitionHelper';

function TextTransition({ text, lenis }) {
    const [rendered, setRendered] = useState(text);
    const [isBlurred, setIsBlurred] = useState(false);
    const containerRef = useRef(null);
    const lenisListenerRef = useRef(null);

    useEffect(() => {
        setIsBlurred(true);
        const timeout = setTimeout(() => {
            setRendered(text);
            setIsBlurred(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [text]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleLenisScroll = () => {
            const viewportHeight = window.innerHeight;
            const words = container.querySelectorAll(`.${classes.word}`);
            words.forEach((word) => {
                const rect = word.getBoundingClientRect();
                const isVisible = rect.top < viewportHeight && rect.bottom > 0;
                word.classList.toggle(classes.visible, isVisible);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!lenisListenerRef.current) {
                            lenis.on("scroll", handleLenisScroll);
                            lenisListenerRef.current = handleLenisScroll;
                            handleLenisScroll();
                        }
                    } else {
                        if (lenisListenerRef.current) {
                            lenis.off("scroll", lenisListenerRef.current);
                            lenisListenerRef.current = null;
                            const words = container.querySelectorAll(`.${classes.word}`);
                            words.forEach((word) => word.classList.remove(classes.visible));
                        }
                    }
                });
            },
            {
                threshold: 0.01,
            }
        );

        observer.observe(container);

        return () => {
            observer.disconnect();
            if (lenisListenerRef.current) {
                lenis.off("scroll", lenisListenerRef.current);
                lenisListenerRef.current = null;
            }
        };
    }, [rendered]);

    return (
        <span
            ref={containerRef}
            className={`${classes.fadeText} ${isBlurred ? classes.blur : ""}`}
        >
            {splitText(rendered, classes)}
        </span>
    );
}

export default TextTransition;
