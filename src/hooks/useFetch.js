import { useCallback, useEffect, useState, useTransition } from "react";


export const useFetch = ({ options, url }) => {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ , startTransition ] = useTransition();

    const fetchData = useCallback(() => {
        setLoading(true);
        
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                setData(res);
                startTransition(() => {
                    setLoading(false);
                })
            })
            .catch(err => {
                setError(err);
                startTransition(() => {
                    setLoading(false);
                })
            })
    }, [ options, url ]);

    useEffect(() => {
        fetchData();
    }, [ fetchData ]);

    return { data, error, fetchData, loading };
};