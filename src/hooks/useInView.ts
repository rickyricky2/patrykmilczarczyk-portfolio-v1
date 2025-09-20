import { useEffect, useState, useRef } from "react";

export function useInView(options?: IntersectionObserverInit){
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState<boolean>(false);

    useEffect(() => {
        if(!ref.current)return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => setInView(entry.isIntersecting));
        },{ ...options}
        );

        observer.observe(ref.current!);
        return () => observer.disconnect();
    },[options])

    return {ref, inView};
}