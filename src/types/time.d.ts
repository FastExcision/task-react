export type Options = {
    time: string
}

export type GetNextDay = <T extends Record<string, unknown>, K extends keyof T>(
    data: T[],
    daysCount: number,
    dateField: K,
    options?: Options
) => T[];