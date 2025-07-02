import { useEffect } from "react";

const VisibilityObserver = () => {
    useEffect(() => {
        const targets = document.querySelectorAll(
            "section > div, section > footer",
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.1,
            },
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
};

export default VisibilityObserver;
