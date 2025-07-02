import { useState, useEffect } from "react";

export function useRenderWithHideDelay(visible, delay = 100) {
    const [shouldRender, setShouldRender] = useState(false);
    const [isHiding, setIsHiding] = useState(false);

    useEffect(() => {
        if (visible) {
            setShouldRender(true);
            setIsHiding(false);
        } else if (shouldRender) {
            setIsHiding(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsHiding(false);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [visible, shouldRender, delay]);

    return { shouldRender, isHiding };
}
