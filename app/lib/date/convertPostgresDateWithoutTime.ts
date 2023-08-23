export const convertPostgresDateWithoutTime = (date: string) => {
    if(date) return new Date(`${date.substring(0, 19)}`)
}