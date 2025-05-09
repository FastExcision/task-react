export type FetchingFunction<T extends unknown[]> = (...args: T) => Promise<void>;
