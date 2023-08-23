export const convertPostgresDateToNormalDate = (date: string) => {
    if(date) return `${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)} ${date.substring(11, 16)}`
}