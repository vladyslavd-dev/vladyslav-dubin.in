import { useEffect, useState } from "react";

const START_DATE = new Date(2023, 0, 15, 1, 33); // 15.01.2022 01:33

export const getProgrammingTime = () => {
    const ms = Date.now() - START_DATE;

    return {
        years: Math.floor(ms / 31_557_600_000),
        month: Math.floor((ms / 2_630_016_000) % 12),
        days: Math.floor((ms / 86_400_000) % 30.44),
        hours: Math.floor((ms / 3_600_000) % 24),
        minutes: Math.floor((ms / 60_000) % 60),
        seconds: Math.floor((ms / 1000) % 60),
    };
};

export const useProgrammingTime = () => {
    const [time, setTime] = useState(getProgrammingTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getProgrammingTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
};
