import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay?: number) => {
    const [debouncedValue, setDebouncedValeu] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValeu(value), delay || 500);
        return () => clearTimeout(timer);
    }, [value]);

    return debouncedValue;
}
