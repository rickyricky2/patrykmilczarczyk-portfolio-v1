import {useRef, useEffect} from "react";

export function useClickOutside(onClickOutside: () => void ){
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const handleClick = (e:MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node)){
                onClickOutside();
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    },[onClickOutside]);

    return ref;
}