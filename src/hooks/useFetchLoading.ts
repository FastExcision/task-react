import { useState } from 'react';
import {FetchingFunction} from "../types/useFetching";

export const useFetchLoading = <T extends unknown[]>(
    callback: FetchingFunction<T>
): [FetchingFunction<T>, boolean, string | null] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetching: FetchingFunction<T> = async (...args) => {
        try {
            setIsLoading(true);
            setError(null);
            await callback(...args);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
};