import {useEffect, useMemo, useState} from "react";

export const useDOMLoaded = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, [domLoaded]);

    return useMemo(() => domLoaded, [domLoaded]);
}